import { createFileRoute } from "@tanstack/react-router";
import { YearCalendar } from "../components/Full-Year";

export const Route = createFileRoute("/year")({
  component: Component,
});

function Component() {
  return (
    <YearCalendar
      year={2026}
      events={[
        {
          id: "vac-1",
          summary: "Beach Trip",
          startDate: "2026-06-01",
          endDate: "2026-06-05",
        },
      ]}
      signedIn={true}
    />
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
