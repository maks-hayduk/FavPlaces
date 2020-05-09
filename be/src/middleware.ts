import jwt from 'jsonwebtoken';

import config from './config';

import { IRequest, IResponse } from 'types';

const checkToken = (req: IRequest, res: IResponse, next: () => void) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  if ((token as string).startsWith('Bearer ')) {
    token = token?.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token as string, config.secretKey, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      }

      req.decoded = decoded;
      next();
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

export default {
  checkToken
}
