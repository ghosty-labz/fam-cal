import { createFileRoute, redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { YearCalendar } from "../components/Full-Year";
import {
  SignedIn,
  UserButton,
  SignInButton,
  SignedOut,
} from "@clerk/clerk-react";
import { clerkClient, auth } from "@clerk/tanstack-react-start/server";
import { useUser } from "@clerk/clerk-react";
import { useMemo, useState, useEffect } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

interface GoogleCalendar {
  id: string;
  summary: string;
  primary: boolean;
  selected: boolean;
  backgroundColor?: string;
  accountEmail?: string;
}

const authStateFn = createServerFn().handler(async () => {
  // The `Auth` object gives you access to properties like `isAuthenticated` and `userId`
  // Accessing the `Auth` object differs depending on the SDK you're using
  // https://clerk.com/docs/reference/backend/types/auth-object#how-to-access-the-auth-object
  const { isAuthenticated, userId } = await auth();

  const client = await clerkClient();

  // Protect the server function from unauthenticated users
  if (!isAuthenticated) {
    // This might error if you're redirecting to a path that doesn't exist yet
    // You can create a sign-in route to handle this
    // See https://clerk.com/docs/reference/tanstack-react-start/custom-sign-in-or-up-page
    throw redirect({
      to: "/sign-in/$",
    });
  }

  // Get the user's full `Backend User` object
  const user = await client.users.getUser(userId);
  const token = await client.users.getUserOauthAccessToken(userId, "google");

  return { userId, firstName: user?.firstName, token: token?.data[0].token };
});

export const Route = createFileRoute("/year")({
  component: Component,
  beforeLoad: () => authStateFn(),
  loader: async ({ context }) => {
    return {
      userId: context.userId,
      firstName: context.firstName,
      token: context.token,
    };
  },
});

function Component() {
  const [isLoading, setIsLoading] = useState(false);
  const [calendars, setCalendars] = useState<GoogleCalendar[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { token } = Route.useLoaderData();
  const { user } = useUser();

  const fetchCalendars = async (
    savedSelections?: { id: string; name: string }[],
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      const googleAccount = user?.externalAccounts.find(
        (ea) => ea.provider === "google",
      );
      const accountEmail = googleAccount?.emailAddress;
      if (
        !googleAccount?.approvedScopes?.includes(
          "https://www.googleapis.com/auth/calendar.readonly",
        )
      ) {
        console.log("No calendar read scope");
        return;
      }

      const response = await fetch(
        "https://www.googleapis.com/calendar/v3/users/me/calendarList",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch calendars");
      }

      const data = await response.json();
      const formattedCalendars = data.items.map((calendar: any) => ({
        id: calendar.id,
        summary: calendar.summary,
        primary: calendar.primary || false,
        selected: savedSelections
          ? savedSelections.some((sel) => sel.id === calendar.id)
          : calendar.primary || false,
        backgroundColor: calendar.backgroundColor,
        accountEmail,
      }));
      setCalendars(formattedCalendars);
    } catch (err) {
      console.error("Error fetching calendars:", err);
      setError(
        err instanceof Error ? err.message : "Failed to fetch calendars",
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function loadCalendars() {
      try {
        await fetchCalendars();
      } catch (error) {
        console.error("Error loading calendars:", error);
        // If getting saved selections fails, still try to load calendars
        await fetchCalendars();
      }
    }
    void loadCalendars();
  }, [user]);

  const selectedCalendarIds = useMemo(
    () => new Set(calendars.filter((cal) => cal.selected).map((cal) => cal.id)),
    [calendars],
  );

  const calendarNames = useMemo(
    () => Object.fromEntries(calendars.map((cal) => [cal.id, cal.summary])),
    [calendars],
  );

  const calendarColors = useMemo(
    () =>
      Object.fromEntries(
        calendars
          .filter((cal) => cal.backgroundColor)
          .map((cal) => [cal.id, cal.backgroundColor as string]),
      ),
    [calendars],
  );

  const calendarAccounts = useMemo(
    () =>
      Object.fromEntries(
        calendars
          .filter((cal) => cal.accountEmail)
          .map((cal) => [cal.id, cal.accountEmail as string]),
      ),
    [calendars],
  );

  const demoEvents = useMemo(() => {
    const primaryCalendarId =
      calendars.find((cal) => cal.primary)?.id ?? calendars[0]?.id;
    return [
      {
        id: "vac-1",
        summary: "Beach Trip",
        startDate: "2026-06-01",
        endDate: "2026-06-05",
        calendarId: primaryCalendarId,
      },
    ];
  }, [calendars]);

  const visibleEvents = useMemo(() => {
    if (selectedCalendarIds.size === 0) return demoEvents;
    return demoEvents.filter(
      (event) => !event.calendarId || selectedCalendarIds.has(event.calendarId),
    );
  }, [demoEvents, selectedCalendarIds]);

  return (
    <>
      <div className="h-full w-full overflow-y-auto overflow-x-hidden">
        <header className="p-2 flex justify-between">
          <SidebarTrigger />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </header>
        <YearCalendar
          year={2026}
          events={visibleEvents}
          signedIn={true}
          calendarColors={calendarColors}
          calendarNames={calendarNames}
          calendarAccounts={calendarAccounts}
        />
      </div>
    </>
  );
}

/** Example usage
 *
 * <YearAllDayCalendar
 *   year={2026}
 *   events={[
 *     { id: "vac-1", title: "Beach Trip", start: "2026-06-14", end: "2026-06-20" },
 *     { id: "xmas", title: "Christmas", start: "2026-12-25", end: "2026-12-25", className: "bg-white" },
 *   ]}
 *   onYearChange={(y) => setYear(y)}
 *   onDayClick={(d) => console.log(d)}
 *   onEventClick={(e) => console.log(e)}
 * />
 */
