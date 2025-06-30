import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./app/schemas/**/*.ts",
  out: "./app/sqls/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
