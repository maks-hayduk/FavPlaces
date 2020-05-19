import pool from './dbPoolService';
import AuthService from './authService';
import PlacesService from './placesService';
import UserService from './userService';
import TagsService from './tagsService';
import SharedService from './sharedPlacesService';

const authService = new AuthService();
const placesService = new PlacesService();
const userService = new UserService();
const tagsService = new TagsService();
const sharedPlacesService = new SharedService();

export { pool, authService, placesService, userService, tagsService, sharedPlacesService };
