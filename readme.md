# Practice App

This is a **practice Node.js app** built using Express Generator, MongoDB (via Mongoose), Sessions, and Cookies. It's focused on learning and experimenting with backend fundamentals.

---

## 📘 Topics Covered

### 📦 1. Express Generator
- **Installed using:**
  ```bash
  npm install -g express-generator
Created app using:

bash

express myapp
After creating the app:

bash

cd myapp
npm install
npm start
🛢️ 2. MongoDB & Mongoose.js
Install Mongoose:

bash

npm install mongoose
Connect to MongoDB:

js
Copy code
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/practicedb');
Schema & Model:

js

const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema);
module.exports = User;
🔐 3. Sessions
Install:

bash
Copy code
npm install express-session
Setup in app.js:

js

const session = require('express-session');
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));
Usage:

Set: req.session.key = value

Read: req.session.key

Delete: req.session.destroy()

🍪 4. Cookies
cookie-parser is already installed by Express Generator.

Usage:

Set: res.cookie('name', 'value')

Read: req.cookies.name

Delete: res.clearCookie('name')

🚀 How to Run
bash

git clone <repo-url>
cd practicedb
npm install
npm start
🎯 Purpose
This app was created for learning and practicing:

Express app structure

MongoDB connections and models

Session & cookie handling

🛠 Tech Stack
Node.js

Express.js

MongoDB

Mongoose

express-session

cookie-parser
