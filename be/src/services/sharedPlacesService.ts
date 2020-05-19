import { IRequest, IResponse } from 'types';

import pool from './dbPoolService';

import { parseGetAllPlacesResponse } from '../utils';

interface ISharedPlacesService {
  sharePlace: (req: IRequest, res: IResponse) => void;
}

interface ITag {
  id: number;
}

class SharedPlacesService implements ISharedPlacesService {
  sharePlace = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;
    const { id: placeId } = req.params;
    const { email } = req.body;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    pool.query(
      'INSERT INTO shared VALUES ($1, $2, $3)', 
      [placeId, id, email], 
      (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        res.status(200).send({});
      }
    );
  }

  getSharedPlace = (req: IRequest, res: IResponse) => {
    const { id, email } = req.decoded;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    pool.query(
      `
        SELECT p.id, latitude, longtitude, title, description, datetime, email, tagid, label from shared 
          LEFT JOIN places p on p.id = shared.placeid
          LEFT JOIN users u on u.id = shared.fromid
          LEFT JOIN placestags pt on p.id = pt.placeid
          LEFT JOIN tags t on t.id = pt.tagid
        WHERE shared.toemail = $1
      `, [email], (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        res.status(201).send(parseGetAllPlacesResponse(result.rows));
      }
    );
  }

  deleteSharedPlace = (req: IRequest, res: IResponse) => {
    const { id, email } = req.decoded;
    const { id: placeId } = req.params;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    pool.query('DELETE FROM shared WHERE toemail=$1 AND placeid=$2', [email, placeId], (error, result) => {
      if (error) {
        res.status(400).send(error);
      }

      res.status(200).send({});
    });
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

export default SharedPlacesService;
