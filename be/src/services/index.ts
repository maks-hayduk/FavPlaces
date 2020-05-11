import pool from './dbPoolService';
import AuthService from './authService';
import PlacesService from './placesService';
import UserService from './userService';

const authService = new AuthService();
const placesService = new PlacesService();
const userService = new UserService();

export { pool, authService, placesService, userService };
