import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/db/schemas/**/*.ts",
  out: "./app/db/sqls/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
