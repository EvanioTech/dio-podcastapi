import fs from 'fs';
import path from 'path';
import { Podcast } from '../models/podcast-model';




const pathData = path.resolve(__dirname, '../repositories/podcasts.json');

export const repoPodcasts = async (): Promise<Podcast[]> => {
  const rawData = fs.readFileSync(pathData, 'utf-8');
    return JSON.parse(rawData);

}