import { IRequest, IResponse } from 'types';

import pool from './dbPoolService';

import config from '../config';

interface ITagsService {
  getAllTags: (req: IRequest, res: IResponse) => void;
}

class TagsService implements ITagsService {
  getAllTags = (req: IRequest, res: IResponse) => {
    pool.query(
      'SELECT * FROM tags', [], (error, result) => {
        if (error) {
          res.status(400).send(error);
        }

        res.status(201).send(result.rows);
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

export default TagsService;
