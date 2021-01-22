import { Request, Response } from 'express';
import axios from 'axios';
import { PlayerData } from '../../interfaces/player-data.interface';

const getPlayerData = (req: Request, res: Response) => {
  let info = axios.get(`https://api.opendota.com/api/players/${req.params.id}`);
  let wl = axios.get(
    `https://api.opendota.com/api/players/${req.params.id}/wl`
  );

  axios
    .all([info, wl])
    .then(
      axios.spread((...responses) => {
        const info = responses[0].data;
        const wins = responses[1].data.win;
        const losses = responses[1].data.lose;
        const result: PlayerData = { ...info, wins, losses };

        res.status(200).send(result);
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

export default {
  getPlayerData,
};
