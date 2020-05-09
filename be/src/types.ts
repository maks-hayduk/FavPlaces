import { Request, Response } from 'express';

export type IRequest = Request & { decoded?: any };

export type IResponse = Response;
