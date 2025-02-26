import * as http from 'http';

import { getFilstEpisodes, getListEpisodes } from './controllers/podcasts-controllers';
import { Routes } from './routes';
import { HttpMethod } from './utils/http-methods';

const server = http.createServer( async (req: http.IncomingMessage, res: http.ServerResponse) => {

  //query string
  const [baseURL, queryString] = req.url?.split('?') ?? ["", ""];
  console.log(baseURL);
  console.log(queryString);
 
  
  if (req.method === HttpMethod.GET && baseURL === Routes.LIST) {
    await getListEpisodes(req, res);
  }
  if (req.method === HttpMethod.GET && baseURL === Routes.EPISODE) {
    await getFilstEpisodes(req, res);
  }
}
);

const port = process.env.PORT || 3636;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}
);


//teste



