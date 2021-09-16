const { default: Axios } = require("axios");

class CensusService {
  constructor() {
    let service = Axios.create({
      baseURL:
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json",
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.service = service;
  }
  getCensusData = () => this.service.get().then((res) => res.data);
}

export default CensusService;
