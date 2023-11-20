import express from 'express';
import { createCategoryController } from '../Controllers/Connect.js';
import { deleteCategoryController } from '../Controllers/Connect.js';
import { updateCategoryController } from '../Controllers/Connect.js';

const router = express.Router();

router.post('/create-category', createCategoryController);
router.delete('/delete-category/:id', deleteCategoryController);
router.put('/update-category/:id', updateCategoryController);

export default router;
