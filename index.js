const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose');
const users = require('./api/Routes/user')
const texts = require('./api/Routes/text')
const search = require("./api/Routes/search");
const publictexts = require("./api/Routes/publicText");

const app = express();  
dotenv.config()
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Erreur de connexion à MongoDB: ' + error.message);
  }
}

  
  connectToDatabase();

  // Route pour enregistrer le formulaire
 

// Configuration du port du serveur 
const port = process.env.PORT || 5500 ;
// Envoyer un message pour l'URL par défaut 
app.get('/', (req, res) => res.send('Hello, ready to communicate! '));
app.use('/users', users)
app.use('/texts', texts)
app.use("/search", search);
app.use("/publictexts", publictexts);


// Lancer l'application pour écouter le port spécifié 
app.listen(port, function () { 
     console.log("Exécution du serveur sur le port " + port); 
});

module.exports = app;