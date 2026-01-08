import Database from "better-sqlite3";
import { betterAuth } from "better-auth";
import { tanstackStartCookies } from "better-auth/tanstack-start";

const database = new Database("better-auth.db");

export const auth = betterAuth({
  appName: "FamCal",
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  database,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [tanstackStartCookies()],
});
