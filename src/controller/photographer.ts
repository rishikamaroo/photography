import { RequestHandler } from 'express';
import { get, getAll, getByEvent, postPhotographer } from '../model/photographer';
import { IPhotographer } from '../type';

export const getAllPhotoraphers: RequestHandler = async (req, res) => {
  try {
    console.log("In getAllPhotoraphers... ");
    const text = (req.body as { text: string }).text;
    const result = getAll();
    res.status(200).json({
      status: 'ok',
      message: 'success!',
      body: result ? result : [],
    });
  } catch (err) {
    res.status(500).json({
      status: 'internal server error - 1',
      message: 'try again later!',
      body: [],
    });
  }
}

export const getPhotographer: RequestHandler = async (req, res) => {
  try {
    console.log("getting a photographer.... ");
    const result = get();
    res.status(200).json({
      status: 'ok',
      message: 'success!',
      body: result ? [result] : [],
    });
  } catch (err: any) {
    console.log("erros: " + err.message);
    // logger.ts
    // error.ts
    res.status(500).json({
      status: 'internal server error - 2',
      message: 'try again later!',
      body: [],
    });
  }
}

export const createPhotographer: RequestHandler = async (req, res) => {
  try {
    const text = req.body as IPhotographer;
    const result = postPhotographer(text);
    res.status(200).json({
      status: 'ok',
      message: result,
      body: result ? result : [],
    });
  } catch (err) {
    res.status(500).json({
      status: 'internal server error',
      message: 'try posting the photographer again later!',
      body: [],
    });
  }
}

export const getPhotographersByEvent: RequestHandler = async (req, res) => {
  try {
    const text = (req.body as { text: string }).text;
    const result = getByEvent();
    res.status(200).json({ // HttpStatus {2xx, 3xx, 4xx...}
      status: 'ok',
      message: 'success!',
      body: result ? result : [],
    });
  } catch (err) {
    res.status(500).json({
      status: 'internal server error - 3 ',
      message: 'try again later!',
      body: [],
    });
  }
}