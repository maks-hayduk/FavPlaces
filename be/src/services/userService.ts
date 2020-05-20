import bcrypt from 'bcrypt';

import { IRequest, IResponse } from 'types';

import pool from './dbPoolService';

import config from '../config';

interface IUserService {
  getUser: (req: IRequest, res: IResponse) => void;
}

class UserService implements IUserService {
  getUser = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    this._getCurrentUser(id, (err, val) => {
      if (err) {
        res.status(400).send(err);
      }

      const { password, ...userData } = val;

      res.status(200).send(userData);
    });
  }

  updateUser = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;
    const { name, surname, email, oldPassword, newPassword } = req.body;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    const dataUpdate = [name, surname, email, id];

    pool.query(
      'UPDATE users SET name=$1, surname=$2, email=$3 WHERE id = $4', dataUpdate, async (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const oldHashed = await bcrypt.hash(oldPassword, 10);

        this._getCurrentUser(id, async (err, val) => {
          if (err) {
            res.status(400).send(err);
          }
    
          const { password, ...userData } = val;

          const isPassSame = await bcrypt.compare(oldHashed, password);

          if (isPassSame) {
            pool.query('UPDATE users SET password=$1 WHERE id = $2', [hashedPassword, id], async (passError, passResult) => {
              res.status(200).send({
                passwordChanged: true,
                ...userData
              });
            });
          } else {
            res.status(200).send({
              passwordChanged: false,
              ...userData
            });
          }
    
          res.status(200).send(userData);
        });
      });
  }

  private _getCurrentUser = (id: number, callback: (err: any, val: any) => void) => {
    pool.query(
      'SELECT * FROM users WHERE id = $1', [id], (error, result) => {
        callback(error, result.rows[0]);
      }
    );
  }
}

export default UserService;
