import Service from '@ember/service';
import fetch from 'fetch';

export default class BoredApiService extends Service {
  async getActivity() {
    const response = await fetch('https://www.boredapi.com/api/activity');
    if (!response.ok) {
      throw new Error('Cant fetch Bored Api /activity endpoint');
    }
    return response.json();
  }
}
