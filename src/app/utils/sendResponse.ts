import { Response } from 'express';

type TApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export default function sendResponse<T>(res: Response, payload: TApiResponse<T>) {
  res.json(payload);
}
