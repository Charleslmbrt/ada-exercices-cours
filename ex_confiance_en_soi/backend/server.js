const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const myJson = require("./myaffirmations.json");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//création d'un modèle affirmation
class myAffirmation {
  constructor(affirmation) {
    this.affirmation = affirmation;
  }
}

app.get("/", async function (req, res) {
  try {
    const response = await fetch("https://www.affirmations.dev/");
    const dataAffirmations = await response.json();

    res.send(dataAffirmations.affirmation);
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/", function (req, res) {
  try {
    // Création d'un nouvelle affirmation
    const newAffirmation = new myAffirmation(req.body.affirmation);

    // Pusher les nouvelles affirmations dans le fichier json myJson
    myJson.push(newAffirmation);

    // Transformer ma data au format json
    const transformData = (data) => {
      const jsonData = JSON.stringify(data);
      return jsonData;
    };

    let saveData = transformData(myJson);

    // Remplacer le contenu du fichier json par celui de saveData
    const fs = require("fs");
    fs.writeFile("myaffirmations.json", saveData, function (err) {
      if (err) throw err;
      console.log("Fichier mis à jour !");
    });

    let myObj = JSON.parse(saveData);

    myObj.map((el) => {
      console.log(el.affirmation);
      return el;
    });

    res.send(saveData);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000, () => {
  console.log("Server has started");
});
