import { IncomingMessage, ServerResponse } from "http";

import { ServiceListEpisodes } from "../services/list-episodes-service";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(await ServiceListEpisodes()));
}