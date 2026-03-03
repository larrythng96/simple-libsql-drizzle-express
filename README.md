# simple-libsql-drizzle-express

A simple Express.js API using Drizzle ORM with a libsql (SQLite) database.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` (already pre-configured for local SQLite):

```bash
cp .env.example .env
```

## Commands

### Seed the database

Creates the database and users table if they don't exist, then seeds 5 user records. Run this at any time to reset to the same known state.

```bash
npm run db
```

### Start the development server

```bash
npm run dev
```

## API

### GET /users

Returns all users.

```bash
curl http://localhost:3000/users
```

**Response:**

```json
[
  { "id": 1, "name": "Alice Johnson", "email": "alice@example.com" },
  { "id": 2, "name": "Bob Smith", "email": "bob@example.com" },
  { "id": 3, "name": "Carol White", "email": "carol@example.com" },
  { "id": 4, "name": "David Brown", "email": "david@example.com" },
  { "id": 5, "name": "Eva Martinez", "email": "eva@example.com" }
]
```
