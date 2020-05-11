import 'babel-polyfill';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import middleware from './middleware';
import { authService, placesService, userService } from './services';

const app = express();
const port = 5000;

app.use(cors());
app.set('json spaces', 2);
app.use(bodyParser.json());

app.post('/api/signup', authService.signUp);
app.post('/api/signin', authService.login);

app.get('/api/places', middleware.checkToken, placesService.getAllPlaces);
app.post('/api/places', middleware.checkToken, placesService.addPlace);
app.delete('/api/places/:id', middleware.checkToken, placesService.deletePlace);
app.put('/api/places/:id', middleware.checkToken, placesService.updatePlace);

app.get('/api/user', middleware.checkToken, userService.getUser);

app.listen(port, () => {
  console.log(`Back-end started on localhost:${port}`);
});
