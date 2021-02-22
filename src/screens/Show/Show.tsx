import React from "react";
import { RouteComponentProps } from "react-router";
import styles from "./show.module.scss";
import { ShowState } from "../../interface/interface";
import showService, { ShowService } from "../../services/showService";
import watchlistService, {
  WatchlistService,
} from "../../services/watchlistService";
import ShowImage from "../../components/ShowImage/ShowImage";
import ReactHtmlParser from "react-html-parser";

export default class Show extends React.Component<
  RouteComponentProps,
  ShowState
> {
  protected showService: ShowService;
  protected watchlistService: WatchlistService;

  constructor(props: RouteComponentProps) {
    super(props);

    this.showService = showService;
    this.watchlistService = watchlistService;

    this.state = {
      show: {
        image: {
          medium: "",
          original: "",
        },
        name: "",
        genres: [],
        summary: "string",
        id: "",
      },
      watchList: [],
      hasShowInWatchList: false,
      isLoading: false,
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true
    })
    const showId = this.props.location.pathname.split("/")[2];
    const show = await this.showService.getShow(showId);
    const watchList = this.watchlistService.getWatchlist();
    this.setState({
      watchList
    });
    const hasShowInWatchList = this.watchListHasShow(showId);
    this.setState({
      show,
      hasShowInWatchList,
      isLoading: false
    });
  }

  addOrRemoveFromShow = (): void => {
    const { show, hasShowInWatchList, watchList } = this.state;
    if (hasShowInWatchList) {
      const filteredWatchlist = watchList.filter((item) => item.id.toString() !== show.id.toString());
      this.setState({
        hasShowInWatchList: false,
      });
      this.watchlistService.updateWatchlist(filteredWatchlist);
      return;
    }
    this.setState({
      hasShowInWatchList: true,
    });
    this.watchlistService.updateWatchlist([...watchList, show]);
  };

  watchListHasShow = (showId: string): boolean => {
    return this.state.watchList.some((show) => show.id.toString() === showId.toString());
  };

  render() {
    const { show, hasShowInWatchList, isLoading } = this.state;
    return (
      !isLoading && (
        <div className={styles.container}>
          <div className={styles.showContainer}>
            <div className={styles.show}>
              <div className={styles.leftSide}>
                <ShowImage
                  show={{
                    link: this.state.show.image?.original,
                    name: this.state.show.name,
                    id: this.state.show.id,
                  }}
                />
                <button
                  onClick={this.addOrRemoveFromShow}
                  className={styles.button}
                >
                  {hasShowInWatchList
                    ? "Remove from watchlist"
                    : "Add to watchlist"}
                </button>
              </div>
              <div className={styles.rightSide}>
                <h3>{show.name}</h3>
                <div className={styles.genre}>{show.genres.join(", ")}</div>
                <div className={styles.summary}>
                  {ReactHtmlParser(show.summary)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}
