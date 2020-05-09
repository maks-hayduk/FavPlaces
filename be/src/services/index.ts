import pool from './dbPoolService';
import AuthService from './authService';
import PlacesService from './placesService';

const authService = new AuthService();
const placesService = new PlacesService();

export { pool, authService, placesService };
