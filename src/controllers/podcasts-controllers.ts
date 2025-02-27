import { IncomingMessage, ServerResponse } from "http";

import { serviceFilterEp } from "../services/filter-ep-service";

import { ServiceListEpisodes } from "../services/list-episodes-service";
import { FilterPodcastModel } from "../models/filter-podcast-model";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

  const content: FilterPodcastModel = await ServiceListEpisodes();
  res.writeHead(content.statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(content.body));
}


export const getFilstEpisodes = async (req: IncomingMessage, res: ServerResponse) => {

  const content: FilterPodcastModel =  await serviceFilterEp(req.url) ;

 
  res.writeHead(content.statusCode, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(content.body));
  res.end();
}