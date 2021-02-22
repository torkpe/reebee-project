import { ShowDetails, ShowsResponse } from '../interface/interface';
import Axios from "../utils/axios";


export class ShowService extends Axios {
  private url = 'http://api.tvmaze.com/';

  async searchShows (searchKey: string): Promise<ShowDetails[]>{
    const response = await this.axios.get(`${this.url}search/shows?q=${searchKey}`);
    return response.data.map((data: ShowsResponse) => ({
      name: data.show.name,
      image: data.show.image,
      genres: data.show.genres,
      summary: data.show.summary,
      id: data.show.id
    }))
  }

  async getShow (id: string): Promise<ShowDetails>{
    const response = await this.axios.get(`${this.url}shows/${id}`);
    return response.data;
  }
}


export default new ShowService();
