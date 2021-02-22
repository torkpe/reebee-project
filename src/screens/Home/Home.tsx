import React from 'react';
import styles from './home.module.scss';
import { ListState } from "../../interface/interface";
import watchlistService, { WatchlistService } from "../../services/watchlistService";
import { RouteComponentProps } from 'react-router-dom';
import ShowList from '../../components/ShowList/ShowList';

export default class Home extends React.Component<
RouteComponentProps,
ListState
>  {
  protected watchlistService: WatchlistService;

  constructor(props: RouteComponentProps) {
    super(props);
    this.watchlistService = watchlistService;
    this.state = {
      showlist: []
    };
  }

  async componentDidMount () {
    const showlist = this.watchlistService.getWatchlist();
    this.setState({
      showlist
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <ShowList
          showlist={this.state.showlist}
        />
      </div>
    ) 
  }
}