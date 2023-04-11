import express from 'express';
import mainController from './controllers/mainController.js';
import websiteController from './controllers/websiteController.js';

const router = express.Router();

router.get('/', mainController.home);

router.get('/mentions-legales', mainController.legals);
router.get('/plan', mainController.plan);
router.get('/contact', mainController.contact);

router.get('/infos', websiteController.infos);
router.get('/competences', websiteController.competences);
router.get('/realisations', websiteController.realisations);

// router.use(mainController.notFound);

export default router;