import express from 'express'
const app = express()
const port= 3000

import apprenantsRoute from './router/apprenantsRoute.js';

// Middleware pour traiter les requêtes JSON et URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/post', apprenantsRoute);
app.use('/', apprenantsRoute);
app.use('/delete/id', apprenantsRoute);





// Connexion à la base de données

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    try {
      await prisma.$connect();
      console.log('Connexion à la base de données établie');
    } catch (error) {
      console.error('Erreur de connexion à la base de données:',error);
    }
  }
  main()
  





app.listen(port, () => {
    console.log(`Server ouvert ${port}`)  
  })