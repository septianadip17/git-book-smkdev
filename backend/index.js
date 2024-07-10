import express from "express";
import mysql from "mysql";
import cors from "cors";


const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "book-store",
});

app.get("/", (req, res) => {
  res.json("Hello ini backend!");
});

app.use(express.json)
app.use(cors());

// mengambil semua data buku
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// menambahkan data baru
app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `cover`, `price`) VALUES (?)";
  const value = [
    "title from backend",
    "desc from backend",
    "cover from backend",
    "price from backend",
    10000
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("berhasil tambah data buku");
  })
});

app.listen(8800, () => {
  console.log("server is running on port 8800");
});
