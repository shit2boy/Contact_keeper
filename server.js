const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

//connect database
connectDB();

//init midddleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ name: "Akeem", msg: "Hello Akeem, you gonna be fine" })
);

//define routes

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/Auth"));
app.use("/api/contact", require("./routes/Contact"));

//Serve static assets in production

if (process.env.NODE_ENV === "production") {
  //set the static folder
  app.use(express.static("client/build"));

  app.get("#", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
