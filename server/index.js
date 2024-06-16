const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectToMongoDB() {
  try {
    await client.connect();
    db = client.db("brainteaser");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

connectToMongoDB();

// Routes

app.post("/", (req, res) => {
  return "HI";
});

// LOGIN
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ email });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        res.json({
          message: { id: user._id },
        });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET USER
app.post("/api/getuser", async (req, res) => {
  const { regno } = req.body;

  try {
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ _id: regno });
    if (user) {
      res.json({
        message: user,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// SIGNUP
app.post("/api/signup", async (req, res) => {
  const { regno, fname, lname, email, password } = req.body;

  try {
    const usersCollection = db.collection("users");
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      _id: regno,
      fname,
      lname,
      email,
      password: hashedPassword,
    };

    await usersCollection.insertOne(newUser);
    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
