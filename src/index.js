import "dotenv/config";
import express from "express";
import { db } from "./db/index.js";
import { users } from "./db/schema.js";
import { desc, eq } from "drizzle-orm";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/users", async (req, res) => {
  const allUsers = await db.select().from(users);
  res.json(allUsers);
});

// curl -X DELETE http://localhost:3000/users/last
app.delete("/users/last", async (req, res) => {
  const lastUser = await db.select().from(users).orderBy(desc(users.id)).limit(1);
  
  if (lastUser.length === 0) {
    return res.status(404).json({ message: "No users found" });
  }
  
  await db.delete(users).where(eq(users.id, lastUser[0].id));
  res.json({ message: "Last user deleted", deletedUser: lastUser[0] });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
