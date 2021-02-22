import React from "react";
import { RouteProps, } from "react-router-dom";


export interface ShowImageDetails {
  show: {
    link?: string,
    name: string,
    id: string
  }
}

export interface Image {
  medium: string,
  original: string
}

export interface ShowDetails {
  image: Image | null,
  name: string,
  genres: string[],
  summary: string,
  id: string
}

export interface ListState {
  showlist: ShowDetails[]
}
export interface ComponentProps {
  history: any,
}
export interface ShowState  {
  show: ShowDetails,
  watchList: ShowDetails[],
  hasShowInWatchList: boolean
}

export interface ShowsResponse {
  score: number,
  show: ShowDetails
}

