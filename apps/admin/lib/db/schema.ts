import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// Define the artworks table
export const artworks = sqliteTable("artworks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  image: text("image").notNull(),
  title: text("title").notNull(),
  category: text("category", {
    enum: ["painting", "sculpture", "installation", "other"],
  }).notNull(),
  time: text("time"),
  medium: text("medium"),
  dimension: text("dimension"),
  description: text("description", { mode: "json" }).$type<string[]>(),
  details: text("details", { mode: "json" }).$type<string[]>(),
});

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  content: text("content").notNull(),
  bannerImage: text("banner_image").notNull(),
  tags: text("tags", { mode: "json" }).$type<string[]>(),
  publishedAt: text("published_at").notNull(),
});

export type Artwork = typeof artworks.$inferSelect;
export type NewArtwork = typeof artworks.$inferInsert;
export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;