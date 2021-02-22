import { ListState, ShowDetails } from "../interface/interface";


export class WatchlistService {
  getWatchlist(): ShowDetails[] {
    const watchlist = localStorage.getItem('watchlist');
    if (watchlist) {
      const list = JSON.parse(watchlist);
      return list
    }
    return[]
  }

  updateWatchlist(watchlist: ShowDetails[]): void {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }
}

export default new WatchlistService();


