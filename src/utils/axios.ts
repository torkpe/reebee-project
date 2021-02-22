import axios, {
  AxiosInstance,
} from "axios";


export default class Axios {
  protected axios: AxiosInstance; 

  constructor() {
    this.axios = axios;
  }
}


