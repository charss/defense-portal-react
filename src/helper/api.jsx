import * as axios from "axios";

export default class Api {
  constructor() {
    this.api_token = null;
    this.client = null;
    // this.api_url = process.env.REACT_APP_API_ENDPOINT;
    this.api_url = "http://127.0.0.1:5000/api";
  }

  init = () => {
    // this.api_token = getCookie("ACCESS_TOKEN");

    let headers = {
      Accept: "application/json",
    };

    // if (this.api_token) {
    //   headers.Authorization = `Bearer ${this.api_token}`;
    // }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getPanelists = (params) => {
    return this.init().get("/v1/panelists", { params: params });
  };

  getStudents = (params) => {
    return this.init().get("/v1/students", { params: params });
  };

  getGroups = (params) => {
    return this.init().get("/v1/groups", { params: params });
  };

  getTemplates = (params) => {
    return this.init().get("/v1/templates", { params: params });
  };

  getScedules = (params) => {
    return this.init().get("/v1/schedules", { params: params });
  };

  getRubrics = (params) => {
    return this.init().get("/v1/rubrics", { params: params });
  };

  addNewUser = (data) => {
    return this.init().post("/users", data);
  };
}
