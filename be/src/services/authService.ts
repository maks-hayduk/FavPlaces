import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from 'config';
import { IRequest, IResponse } from 'types';

import pool from './dbPoolService';

interface IAuthService {
  signup: (req: IRequest, res: IResponse) => void;
  login: (req: IRequest, res: IResponse) => void;
}

class AuthService implements IAuthService {
  signup = async (req: IRequest, res: IResponse) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = { 
        name: req.body.name, 
        email: req.body.email, 
        password: hashedPassword 
      };

      pool.query(
        'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)', 
        [user.name, user.email, user.password, 'user'], 
        (error, result) => {
          if (error) {
            res.status(400).send(error);
          }
          
          res.status(201).send({
            success: true
          });
        });
    } catch {
      res.status(500).send({
        success: false
      });
    }
  }

  login = async (req: IRequest, res: IResponse): Promise<void> => {
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
