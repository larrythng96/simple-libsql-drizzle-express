import "dotenv/config";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { users } from "./schema.js";
import { sql } from "drizzle-orm";

const client = createClient({ url: process.env.DB_URL });
const db = drizzle(client);

async function seed() {
  // Create table if it does not exist
  await db.run(sql`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    )
  `);

  // Clear existing records to always reach the same state
  await db.delete(users);

  // Insert 5 user records
  await db.insert(users).values([
    { name: "Alice Johnson", email: "alice@example.com" },
    { name: "Bob Smith", email: "bob@example.com" },
    { name: "Carol White", email: "carol@example.com" },
    { name: "David Brown", email: "david@example.com" },
    { name: "Eva Martinez", email: "eva@example.com" },
  ]);

  console.log("Database seeded with 5 users.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
