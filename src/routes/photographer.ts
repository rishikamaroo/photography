import { Router } from 'express';
import { createPhotographer, getAllPhotoraphers, getPhotographer, getPhotographersByEvent } from '../controller/photographer';

const router = Router();

router.get('/', getAllPhotoraphers);
router.get('/:id', getPhotographer);
router.get('/event/:event_id', getPhotographersByEvent);
router.post('/', createPhotographer);

export default router;

