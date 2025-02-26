import { IncomingMessage } from "http";
import { repoPodcasts } from "../repositories/podcasts-repository";



export const serviceFilterEp = async (podcastName:string | undefined) => {
    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repoPodcasts(queryString);

    return data;
};
