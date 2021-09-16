const { default: Axios } = require("axios");

class CensusService {
  constructor() {
    let service = Axios.create({
      baseURL: process.env.CENSUS_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.service = service;
  }
  getCensusData = () => this.service.get().then((res) => res.data);
}

export default CensusService;
