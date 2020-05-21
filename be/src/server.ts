import 'babel-polyfill';

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import middleware from './middleware';
import { authService, placesService, userService, tagsService, sharedPlacesService } from './services';

const app = express();
const port = 5000;

app.use(cors());
app.set('json spaces', 2);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.post('/api/signup', authService.signUp);
app.post('/api/signin', authService.login);

app.get('/api/places', middleware.checkToken, placesService.getAllPlaces);
app.post('/api/places', middleware.checkToken, placesService.addPlace);
app.delete('/api/places/:id', middleware.checkToken, placesService.deletePlace);
app.put('/api/places/:id', middleware.checkToken, placesService.updatePlace);
app.post('/api/places/:id/images', middleware.checkToken, placesService.uploadImages);
app.delete('/api/places/:placeId/images/:imageId', middleware.checkToken, placesService.deleteImage);

app.get('/api/shared-places/', middleware.checkToken, sharedPlacesService.getSharedPlace);
app.post('/api/shared-places/:id', middleware.checkToken, sharedPlacesService.sharePlace);
app.delete('/api/shared-places/:id', middleware.checkToken, sharedPlacesService.deleteSharedPlace);

app.get('/api/user', middleware.checkToken, userService.getUser);
app.put('/api/user', middleware.checkToken, userService.updateUser);

app.get('/api/tags', tagsService.getAllTags);

app.listen(port, () => {
  console.log(`Back-end started on localhost:${port}`);
});
