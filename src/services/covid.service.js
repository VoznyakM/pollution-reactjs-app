export default class covidService {

  constructor() {
    this._apiBase = 'http://localhost:3000';
    // this._apiBase = 'http://ec2-54-80-100-248.compute-1.amazonaws.com:3000';
  }

  async getStats(url = '/stats') {
    const res = await fetch(`${this._apiBase}${url}`);
    return await res.json();
    // return await "[{ deahts: 14 }]"
  }

}