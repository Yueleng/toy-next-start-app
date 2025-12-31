import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "./src/lib/db/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
