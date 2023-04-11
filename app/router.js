import express from 'express';

const router = express.Router();

router.get('/', mainController.home);

// router.get('/mentions-legales', mainController.legals);
// router.get('/plan', mainController.plan);
// router.get('/contact', mainController.contact);

// router.get('/tomates', websiteController.all);
// router.get('/tomates/denoncer', websiteController.form);
// router.post('/tomates/denoncer', websiteController.formAction);
// router.get('/tomates/:slug', websiteController.details);

// router.get('/connexion', authController.login);
// router.post('/connexion', authController.loginAction);
// router.get('/inscription', authController.signup);
// router.post('/inscription', authController.signupAction);
// router.get('/deconnexion', isLogged, authController.logout);

// router.get('/profil', isLogged, userController.profil);

// router.use(mainController.notFound);

export default router;