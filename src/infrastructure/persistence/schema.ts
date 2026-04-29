import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const colaborators = pgTable("colaborators", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  document: text("document").notNull().unique(),
});

export const points = pgTable("points", {
  id: uuid("id").primaryKey().defaultRandom(),
  colaboratorId: uuid("colaborator_id")
    .references(() => colaborators.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  company: text("company").notNull(),
});