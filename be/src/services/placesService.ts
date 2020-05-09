import { IRequest, IResponse } from 'types';

import pool from './dbPoolService';

import config from '../config';

interface IPlacesService {
  addPlace: (req: IRequest, res: IResponse) => void;
}

class PlacesService implements IPlacesService {
  addPlace = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;
    const { latitude, longtitude, title } = req.body;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    const values = [id, latitude, longtitude, title];

    pool.query(
      'INSERT INTO places(userId, latitude, longtitude, title) VALUES ($1, $2, $3, $4)', 
      values, 
      (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        res.status(201).send(result);
      }
    );
  }

  updatePlace = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;
    const { latitude, longtitude, title } = req.body;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    const values = [id, latitude, longtitude, title];

    pool.query(
      'INSERT INTO places(userId, latitude, longtitude, title) VALUES ($1, $2, $3, $4)', 
      values, 
      (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        res.status(201).send('Item was added');
      }
    );
  }
}

export default PlacesService;
