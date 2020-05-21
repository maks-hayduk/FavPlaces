import { IRequest, IResponse } from 'types';

import pool from './dbPoolService';

import { parseGetAllPlacesResponse } from '../utils';

interface IPlacesService {
  addPlace: (req: IRequest, res: IResponse) => void;
  getAllPlaces: (req: IRequest, res: IResponse) => void;
  updatePlace: (req: IRequest, res: IResponse) => void;
  deletePlace: (req: IRequest, res: IResponse) => void;
  uploadImages: (req: IRequest, res: IResponse) => void;
  deleteImage: (req: IRequest, res: IResponse) => void;
}

interface ITag {
  id: number;
}

interface IImage {
  id?: number;
  name: string;
  type: string;
  size: string;
  base64: string;
}

class PlacesService implements IPlacesService {
  addPlace = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;
    const { latitude, longtitude, title, datetime, description, tags } = req.body;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    const values = [id, latitude, longtitude, title, datetime, description];

    pool.query(
      'INSERT INTO places(userId, latitude, longtitude, title, datetime, description) VALUES ($1, $2, $3, $4, $5, $6)', 
      values, 
      (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        this._getLastRecordId((err, recordId) => {
          (tags as ITag[]).forEach(tag => {
            pool.query('INSERT INTO placestags VALUES($1, $2)', [tag.id, recordId], () => {});
          });

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
      `
        SELECT places.id, latitude, longtitude, title, description, datetime, tagid, label, base64, size, type, name, pi.id as imageId FROM places 
          LEFT JOIN placestags p on places.id = p.placeId 
          LEFT JOIN tags on p.tagid = tags.id
          LEFT JOIN placesimages pi on pi.placeid = p.placeId
        WHERE userid = $1;
      `, [id], (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        res.status(201).send(parseGetAllPlacesResponse(result.rows));
      }
    );
  }

  updatePlace = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;
    const { id: placeId } = req.params;
    const { title, description, tags } = req.body;

    const values = [title, description, placeId];

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    pool.query(
      'UPDATE places SET title=$1, description=$2 WHERE id=$3', 
      values, 
      (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        pool.query('DELETE FROM placestags WHERE placeid=$1', [placeId], () => {
          if (tags && tags.length) {
            (tags as ITag[]).forEach(tag => {
              pool.query('INSERT INTO placestags VALUES($1, $2)', [tag.id, placeId], () => {});
            });
          }
        });

        res.status(201).send(req.body);
      }
    );
  }

  deletePlace = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;
    const { id: placeId } = req.params;

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

        pool.query('DELETE FROM placestags WHERE placeid=$1', [placeId], () => {
          res.status(200).send();
        });
      }
    );
  }

  uploadImages = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;
    const { id: placeId } = req.params;
    const images: IImage[] = req.body;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    for (let i = 0; i < images.length; i += 1) {
      const { name, type, size, base64 } = images[i];
      const values = [placeId, name, type, size, base64];

      pool.query(
        'INSERT INTO placesimages(placeid, name, type, size, base64) VALUES($1, $2, $3, $4, $5)', 
        values, (_e, _v) => {
          if (i === images.length - 1) {
            pool.query(
              'SELECT * FROM placesimages WHERE placeid=$1', [placeId], (error, value) => {
                res.status(201).send(value.rows);
              } 
            );
          }
        }
      );
    }
  }

  deleteImage = (req: IRequest, res: IResponse) => {
    const { id } = req.decoded;
    const { placeId, imageId } = req.params;

    if (!id) {
      res.status(405).send('Method Not Allowed');
    }

    pool.query('DELETE FROM placesimages WHERE id=$1 and placeid = $2', [imageId, placeId], (error, value) => {
      if (error) {
        res.status(400).send(error);
      }

      res.status(201).send({});
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

export default PlacesService;
