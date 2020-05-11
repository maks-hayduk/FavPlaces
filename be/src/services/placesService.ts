import { IRequest, IResponse } from 'types';

import pool from './dbPoolService';

import config from '../config';

interface IPlacesService {
  addPlace: (req: IRequest, res: IResponse) => void;
}

class PlacesService implements IPlacesService {
  addPlace = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;
    const { latitude, longtitude, title, datetime } = req.body;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    const values = [id, latitude, longtitude, title, datetime];

    pool.query(
      'INSERT INTO places(userId, latitude, longtitude, title, datetime) VALUES ($1, $2, $3, $4, $5)', 
      values, 
      (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        this._getLastRecordId((err, recordId) => {
          res.status(201).send({
            id: recordId,
            ...req.body
          });
        });
      }
    );
  }

  getAllPlaces = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    pool.query(
      'SELECT * FROM places WHERE userId = $1', [id], (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        res.status(201).send(result.rows);
      }
    );
  }

  updatePlace = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;
    const { placeId } = req.query;
    const { latitude, longtitude, title, description, datetime } = req.body;

    const values = [latitude, longtitude, title, description, datetime, placeId];

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    pool.query(
      'UPDATE places SET latitude=$1, longtitude=$2, title=$3, description=$4, datetime=$5 WHERE id=$6', 
      [values], 
      (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        res.status(201).send(req.body);
      }
    );
  }

  deletePlace = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;
    const { placeId } = req.query;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    pool.query(
      'DELETE FROM places WHERE id=$1', 
      [placeId], 
      (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        res.status(200).send(req.body);
      }
    );
  }

  private _getLastRecordId = (callback: (err: {}, result: {}) => void) => {
    pool.query(
      'SELECT MAX(id) FROM places', 
      (error, result) => {
        callback(error, result.rows[0].max);
      }
    );
  }
}

export default PlacesService;
