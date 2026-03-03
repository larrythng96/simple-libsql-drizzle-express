# 🚀 Simple LibSQL + Drizzle + Express

**A beginner-friendly API project to learn backend development with modern tools!**

This is a simple REST API that demonstrates how to:
- ✅ Build a web server with **Express.js** (a popular Node.js framework)
- ✅ Store data in a **SQLite database** (a lightweight database that doesn't require installation)
- ✅ Use **Drizzle ORM** (a tool that makes working with databases easier)
- ✅ Create API endpoints that return data

Perfect for beginners learning backend web development!

---

## 📋 What You Need Before Starting

Before you begin, make sure you have:

1. **Node.js** installed (version 18 or higher)
  - Check if you have it: Open a terminal and type `node --version`
  - If you don't have it: Download from [nodejs.org](https://nodejs.org/)

2. **A code editor** (like VS Code)
  - Download VS Code: [code.visualstudio.com](https://code.visualstudio.com/)

3. **A terminal/command line**
  - Mac: Use "Terminal" app
  - Windows: Use "PowerShell" or "Command Prompt"
  - Linux: Use your terminal app

---

## 🛠️ Setup Instructions

Follow these steps carefully:

### Step 1: Install Dependencies

This downloads all the libraries and tools the project needs.

```bash
npm install
```

**What this does:** Downloads Express, Drizzle, and other packages listed in `package.json`

---

### Step 2: Set Up Environment Variables

This creates a configuration file for your database.

```bash
cp .env.example .env
```

**What this does:** Copies the example environment file. The `.env` file is already configured to use a local SQLite database file called `local.db`

> 💡 **Note:** You don't need to edit the `.env` file - it's already set up to work!

---

### Step 3: Create and Seed the Database

This creates your database and adds sample data.

```bash
npm run db
```

**What this does:**
- Creates a SQLite database file called `local.db` in your project folder
- Creates a `users` table with columns for id, name, and email
- Adds 5 sample users to the database

**Expected output:** You should see a success message saying the database was seeded.

---

### Step 4: Start the Server

This starts your API server.

```bash
npm run dev
```

**What this does:** Starts the Express server on port 3000

**Expected output:** You should see:
```
Server running on http://localhost:3000
```

🎉 **Your server is now running!** Keep this terminal window open.

---

## 🧪 Testing Your API

Once your server is running, you can test it!

### Option 1: Using cURL (in a new terminal)

```bash
curl http://localhost:3000/users
```

### Option 2: Using Your Web Browser

Open your browser and go to: [http://localhost:3000/users](http://localhost:3000/users)

### Option 3: Using a Tool (recommended for beginners)

Use **Postman** or **Insomnia** for a user-friendly interface:
- Postman: [postman.com](https://www.postman.com/downloads/)
- Insomnia: [insomnia.rest](https://insomnia.rest/download)

---

## 📡 API Endpoints

### GET /users

**What it does:** Returns a list of all users in the database

**Example Request:**
```bash
curl http://localhost:3000/users
```

**Example Response:**
```json
[
  { "id": 1, "name": "Alice Johnson", "email": "alice@example.com" },
  { "id": 2, "name": "Bob Smith", "email": "bob@example.com" },
  { "id": 3, "name": "Carol White", "email": "carol@example.com" },
  { "id": 4, "name": "David Brown", "email": "david@example.com" },
  { "id": 5, "name": "Eva Martinez", "email": "eva@example.com" }
]
```

---

## 🔄 Useful Commands

| Command | What It Does |
|---------|-------------|
| `npm install` | Installs all project dependencies |
| `npm run db` | Resets the database and adds fresh sample data |
| `npm run dev` | Starts the development server |

---

## ❓ Troubleshooting

### Problem: "npm: command not found"
**Solution:** You need to install Node.js first. Download it from [nodejs.org](https://nodejs.org/)

### Problem: "Port 3000 is already in use"
**Solution:** Another program is using port 3000. Either:
- Stop the other program
- Or change the port in `src/index.js` (look for `const PORT = 3000`)

### Problem: "Cannot find module..."
**Solution:** Run `npm install` again to make sure all dependencies are installed

### Problem: Server won't start or crashes
**Solution:** 
1. Make sure you ran `npm run db` first to create the database
2. Check that `local.db` file exists in your project folder
3. Look at the error message in the terminal for clues

---

## 📚 What's Next?

Now that you have a working API, try these challenges:

1. **Add a new endpoint** to get a single user by ID
2. **Add a POST endpoint** to create new users
3. **Add a DELETE endpoint** to remove users
4. **Add more fields** to the users table (like age, city, etc.)
5. **Learn about the code** by reading the files in the `src/` folder

---

## 📁 Project Structure

```
├── src/
│   ├── index.js        # Main server file (Express app)
│   └── db/
│       ├── index.js    # Database connection setup
│       ├── schema.js   # Database table definitions
│       └── seed.js     # Script to populate sample data
├── .env                # Environment variables (database URL)
├── package.json        # Project dependencies and scripts
└── README.md           # This file!
```

---

## 🙋 Need Help?

- **Learn Express.js:** [expressjs.com/en/starter/installing.html](https://expressjs.com/en/starter/installing.html)
- **Learn Drizzle ORM:** [orm.drizzle.team/docs/overview](https://orm.drizzle.team/docs/overview)
- **Learn about REST APIs:** [restfulapi.net](https://restfulapi.net/)

Happy coding! 🎉
