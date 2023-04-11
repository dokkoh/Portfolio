import express from 'express';
import session from 'express-session';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: true }));
// app.use(express.static('./inte-pilori/public'));

app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: process.env.SECRET
}));

// app.use(router);

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});