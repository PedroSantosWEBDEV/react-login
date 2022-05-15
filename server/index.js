const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "react-login",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  let mysql = "INSERT INTO usuario ( username, password) VALUES (?, ?)";
  db.query(mysql, [username, password], (err, result) => {
    res.send(result);
  });
});

app.post("/search", (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  let mysql =
    "SELECT * from usuario WHERE username = ? AND password = ?";
  db.query(mysql, [username, password], (err, result) => {
    if (err) {
      res.send({message: "Senha/Usuario estao errados" + err})

    } 
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({message: "Senha/Usuario estao errados"})
    }
  });
});

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
