import { Request, Response } from 'express';
import axios from 'axios';

const getOnePlayer = (req: Request, res: Response) => {
  axios
    .get(`https://api.opendota.com/api/players/${req.params.id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default {
  getOnePlayer,
};
