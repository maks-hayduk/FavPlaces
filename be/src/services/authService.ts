import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { IRequest, IResponse } from 'types';

import pool from './dbPoolService';

import config from '../config';

interface IAuthService {
  signUp: (req: IRequest, res: IResponse) => void;
  signIn: (req: IRequest, res: IResponse) => void;
}

class AuthService implements IAuthService {
  signUp = async (req: IRequest, res: IResponse) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = { 
        name: req.body.name, 
        surname: req.body.surname,
        email: req.body.email, 
        password: hashedPassword
      };

      pool.query(
        'INSERT INTO users (name, surname, email, password, role) VALUES ($1, $2, $3, $4, $5)', 
        [user.name, user.surname, user.email, user.password, 'user'], 
        (error, result) => {
          if (error) {
            return res.status(400).send(error);
          }
          
          res.status(201).send({
            success: true
          });
        });
    } catch (e) {
      res.status(500).send({
        success: false
      });
    }
  }

  signIn = async (req: IRequest, res: IResponse): Promise<void> => {
    pool.query('SELECT * FROM users WHERE email = $1', [req.body.email], async (error, result) => {
      if (error) {
        res.status(400).send(error);
      }
      const user = result.rows[0];
  
      try {
        if (await bcrypt.compare(req.body.password, user.password)) {
          const token = jwt.sign(
            { 
              name: user.name, 
              id: user.id, 
              role: user.role 
            }, 
            config.secretKey,
            { 
              expiresIn: '24h' 
            }
          );
  
          res.status(200).send({
            token,
            success: true,
            name: user.name, 
            id: user.id
          });
        } else {
          res.send({
            message: 'Not allowed'
          });
        }
      } catch {
        res.status(500).send();
      }
    });
  }
}

export default AuthService;
