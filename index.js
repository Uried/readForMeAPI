const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose');
const users = require('./api/Routes/user')
const texts = require('./api/Routes/text')

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
const port = process.env.PORT || 5800 ;
// Envoyer un message pour l'URL par défaut 
app.get('/', (req, res) => res.send('Hi, We can start ! '));
app.use('/users', users)
app.use('/texts', texts)


// Lancer l'application pour écouter le port spécifié 
app.listen(port, function () { 
     console.log("Exécution du serveur sur le port " + port); 
});

module.exports = app;