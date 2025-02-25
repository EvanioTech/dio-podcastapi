import { IncomingMessage, ServerResponse } from "http";


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify([
    {
        podcastName: "flow",
        episode: "EDUARDO FELDBERG [PRIMO POBRE] - Flow #336",
        videoId: "KGs31YO6mT8",
        categories: ["mentalidade", "desenvolvimento pessoal"]
    
    },
    {
        podcastName: "flow",
        episode: "LEANDRO KARNAL - Flow #423",
        videoId: "SjkNXv3I4VE",
        categories: ["mentalidade", "desenvolvimento pessoal"]
    
    },
    {
        podcastName: "flow",
        episode: "DANILO GENTILI - Flow #422",
        videoId: "zvZb4Z4L0Y8",
        categories: ["mentalidade", "desenvolvimento pessoal"]
    
    },
    
    ]));
}