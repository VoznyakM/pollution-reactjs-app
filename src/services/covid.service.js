export default class covidService {
  
  constructor() {
    this._apiBase = 'http://localhost:3000';
  }

  async getStats(url) {
    const res = await fetch(`${this._apiBase}/stats`);
    //console.log(`${this._apiBase}${url}`)
    return await res.json();
  }
  
}