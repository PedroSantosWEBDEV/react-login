const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "login",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { firstname } = req.body;
  const { lastname } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  let mysql = "INSERT INTO usuario ( firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
  db.query(mysql, [firstname, lastname, email, password], (err, result) => {
    res.send(result);
  });
});

// app.post("/search", (req, res) => {
//   const { firstname } = req.body;
//   const { lastname } = req.body;
//   const { email } = req.body;

//   let mysql =
//     "SELECT * from usuario WHERE firstname = ? AND lastname = ? AND email = ?";
//   db.query(mysql, [firstname, lastname, email], (err, result) => {
//     if (err) res.send(err);
//     res.send(result);
//   });
// });

// app.put("/edit", (req, res) => {
//   const { id } = req.body;
//   const { name } = req.body;
//   const { cost } = req.body;
//   const { category } = req.body;
//   let mysql = "UPDATE usuario SET name = ?, cost = ?, category = ? WHERE id = ?";
//   db.query(mysql, [name, cost, category, id], (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   let mysql = "DELETE FROM usuario WHERE id = ?";
//   db.query(mysql, id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
