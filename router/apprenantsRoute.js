// routes/apprenantsRoute.js
import express from 'express';
import { getApprenants, createApprenants, deleteApprenants } from '../controller/apprenantsCotroller.js';

const router = express.Router();

router.get('/apprenants', getApprenants);
router.post('/apprenants', createApprenants);
router.delete('/apprenants', deleteApprenants);


export default router;
