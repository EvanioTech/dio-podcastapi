import { getFilstEpisodes, getListEpisodes } from './controllers/podcasts-controllers';
import { Routes } from './routes';
import { HttpMethod } from './utils/http-methods';
import http from 'http';

export const app = async (req: http.IncomingMessage, res: http.ServerResponse) => {

    //query string
    const baseURL = req.url?.split('?')[0]
    
   
   
    
    if (req.method === HttpMethod.GET && baseURL === Routes.LIST) {
      await getListEpisodes(req, res);
    }
    if (req.method === HttpMethod.GET && baseURL === Routes.EPISODE) {
      await getFilstEpisodes(req, res);
    }
  }
  