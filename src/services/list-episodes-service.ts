import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repoPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";


export const ServiceListEpisodes = async (): Promise<FilterPodcastModel> => {

    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: [],
    };
    const data = await repoPodcasts();

    responseFormat = {

     statusCode: data.length > 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
     body: data,

    };

  
       
    return responseFormat;
}