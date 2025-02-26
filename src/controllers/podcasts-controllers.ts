import { IncomingMessage, ServerResponse } from "http";

import { serviceFilterEp } from "../services/filter-ep-service";

import { ServiceListEpisodes } from "../services/list-episodes-service";
import { StatusCode } from "../utils/status-code";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(StatusCode.OK, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(await ServiceListEpisodes()));
}


export const getFilstEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

 
  res.writeHead(StatusCode.OK, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(await serviceFilterEp(req.url)));
}