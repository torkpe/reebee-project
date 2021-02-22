import React from "react";
import { RouteComponentProps } from 'react-router';
import styles from "./search.module.scss";
import showService, { ShowService } from "../../services/showService";
import { ShowDetails, ListState } from "../../interface/interface";
import ShowList from "../../components/ShowList/ShowList";

export default class Search extends React.Component<RouteComponentProps, ListState> {
  protected searchShows: ShowService;

  constructor(props: RouteComponentProps) {
    super(props);
    this.searchShows = showService;
    this.state = {
      showlist: []
    }
  }

  onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const showlist: ShowDetails[] = await this.searchShows.searchShows(
      event.target.value
    );
    this.setState({
      showlist,
    });
  };

  render() {
    const { showlist } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <input
            className={styles.searchInput}
            onChange={this.onChange}
            placeholder="Search for shows"
          />
          <ShowList
            showlist= {showlist}
          />
        </div>
      </div>
    );
  }
}
