const express = require('express');
const app = express();

//═════╬Middleware╬═══
app.use(express.json());


const names = [{
    id: 5, name: "Sof",
    id: 4, name: "Luz",
    id: 3, name: "Luis",
    id: 2, name: "rocio",
    id: 1, name: "Kroma",
}]

app.get("/", (req, res) => {
    console.log(req)
    res.status(200).send("Al parecer todo funciona como deberia")
})

app.get("/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);

    let nom = names.find(e => e.id === parseInt(id));
    console.log(nom.name);
    res.send("Al parecer todo funciona como deberia", nom);
})
// app.

// function encontrar(id) {

//     console.log(nom)
// }

// encontrar(3)

app.listen(3000);
