import axios from 'axios';
import { Request, Response } from 'express';

const getSearchResults = (req: Request, res: Response) => {
  const query = req.query.query;
  const apiUrl = `https://api.stratz.com/api/v1/search/?query=${query}`;

  if (query) {
    axios
      .get(apiUrl)
      .then((response) => {
        const { data } = response;

        res.status(200).send({ results: data });
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    res.send({ results: null });
  }
};

export default {
  getSearchResults,
};
