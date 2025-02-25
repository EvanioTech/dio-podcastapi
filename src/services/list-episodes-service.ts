import { repoPodcasts } from "../repositories/podcasts-repository";


export const ServiceListEpisodes = async () => {
   const data = await repoPodcasts();
       
    return data;
}