import pool from './dbPoolService';
import AuthService from './authService';

const authService = new AuthService();

export { pool, authService };
