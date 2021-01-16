import { SearchResponse } from './../../interfaces/search-response.interface';
import axios from 'axios';
import { Request, Response } from 'express';

const getSearchResults = (req: Request, res: Response) => {
  const query = req.query.query;
  const players = axios.get(`https://api.opendota.com/api/search/?q=${query}`);
  const others = axios.get(
    `https://api.stratz.com/api/v1/search/?query=${query}`
  );

  axios
    .all([players, others])
    .then((responses) => {
      const players = responses[0].data;
      const {
        teams,
        matches,
        leagues: tournaments,
        proPlayers,
      } = responses[1].data;

      const response: SearchResponse = {
        players,
        teams,
        matches,
        tournaments,
        proPlayers,
      };

      console.log(response);

      res.status(200).send(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default {
  getSearchResults,
};
