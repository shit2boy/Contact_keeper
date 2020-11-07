const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.json({ name: "Akeem", msg: "Hello Akeem, you gonna be fine" })
);
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contact", require("./routes/contact"));

app.listen(PORT, () => console.log(`Server started on prot ${PORT}`));
