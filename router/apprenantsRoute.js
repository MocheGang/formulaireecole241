// routes/apprenantsRoute.js
import express from 'express';
import { getApprenants, createApprenants, deleteApprenants, getApprenantById, updateApprenant } from '../controller/apprenantsCotroller.js';

const router = express.Router();

router.get('/apprenants', getApprenants);
router.post('/apprenants', createApprenants);
router.delete('/apprenants/:id', deleteApprenants);
router.get('/apprenants/:id', getApprenantById);
router.put('/apprenants/:id', updateApprenant);



export default router;
