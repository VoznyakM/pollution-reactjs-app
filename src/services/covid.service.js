export default class covidService {

  constructor() {
    this._apiBase = process.env.REACT_APP_BACKEND_API;
     // 'http://localhost:3000';
     // this._apiBase = 'http://ec2-54-80-100-248.compute-1.amazonaws.com:3000';
  }

  async getTodayStats(url = '/stats/' + new Date().toISOString().split('T')[0]) {
    const res = await fetch(`${this._apiBase}${url}`);
    // console.log(res)
    return await res.json();
  }

  async getYesterdayStats(url = '/stats/' + new Date(Date.now() - 86400000).toISOString().split('T')[0]) {
    const res = await fetch(`${this._apiBase}${url}`);
    // console.log(res)
    return await res.json();
  }

  async getStats(url = '/stats') {
    const res = await fetch(`${this._apiBase}${url}`);
    return await res.json();
  }

  async getMap(url = '/area') {
    const res = await fetch(`${this._apiBase}${url}`);
    return await res.json();
  }

}