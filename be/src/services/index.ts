import pool from './dbPoolService';
import AuthService from './authService';
import PlacesService from './placesService';
import UserService from './userService';
import TagsService from './tagsService';

const authService = new AuthService();
const placesService = new PlacesService();
const userService = new UserService();
const tagsService = new TagsService();

export { pool, authService, placesService, userService, tagsService };
