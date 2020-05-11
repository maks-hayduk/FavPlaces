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

    pool.query(
      'SELECT * FROM users WHERE id = $1', [id], (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        const { password, ...userData } = result.rows[0];

        res.status(200).send(userData);
      }
    );
  }
}

export default UserService;
