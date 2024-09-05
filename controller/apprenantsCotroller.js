import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // Initialiser PrismaClient



// Fonction pour créer un apprenant
export const createApprenants = async (req, res) => {
  const { nom, prenom, date_de_naissance, email, telephone, referentielId } = req.body;

  try {
    const apprenant = await prisma.apprenants.create({
      data: {
        nom,
        prenom,
        date_de_naissance: new Date(date_de_naissance),
        email,
        telephone: parseInt(telephone),
        referentielId // Relation avec la table 'Referentiel'
      }
    });

    res.status(201).json({ message: "Apprenant créé avec succès", apprenant });
  } catch (error) {
    console.error("Erreur lors de la création de l'apprenant : ", error);
    res.status(500).json({ error: "Erreur lors de la création de l'apprenant", details: error.message });
  }
};



export const getApprenants = async (req, res) => {
    try {
      const apprenants = await prisma.apprenants.findMany(); // Récupère tous les apprenants
      res.status(200).json(apprenants); // Retourne la liste des apprenants
    } catch (error) {
      console.error("Erreur lors de la récupération des apprenants :", error);
      res.status(500).json({ error: "Erreur lors de la récupération des apprenants" });
    }
  };



  export const deleteApprenants = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Vérifiez si l'apprenant existe
      const apprenant = await prisma.apprenants.findUnique({
        where: { id_apprenant: id },
      });
  
      if (!apprenant) {
        return res.status(404).json({ message: "Apprenant non trouvé" });
      }
  
      // Supprimez l'apprenant
      await prisma.apprenants.delete({
        where: { id_apprenant: id },
      });
  
      res.status(200).json({ message: "Apprenant supprimé avec succès" });
    } catch (error) {
      console.error("Erreur lors de la suppression de l'apprenant :", error);
      res.status(500).json({ error: "Erreur lors de la suppression de l'apprenant" });
    }
  };



  export const getApprenantById = async (req, res) => {
    const { id } = req.params;

    try {
        // Récupérer l'apprenant par son ID
        const apprenant = await prisma.apprenants.findUnique({
            where: { id_apprenant: id },
        });

        // Si l'apprenant n'existe pas, renvoyer une erreur 404
        if (!apprenant) {
            return res.status(404).json({ message: "Apprenant non trouvé" });
        }

        // Retourner les informations de l'apprenant
        res.status(200).json(apprenant);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'apprenant :", error);
        res.status(500).json({ error: "Erreur lors de la récupération de l'apprenant" });
    }
};
