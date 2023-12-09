import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ActivityDisplayComponent extends Component {
  @service boredApi;
  activity = '';

  @action
  async loadActivity() {
    try {
      const activityData = await this.boredApi.getActivity();
      this.set('activity', activityData.activity);
    } catch (error) {
      console.error('Error while fetching activityendpoint: ', error);
    }
  }

  didInsertElement() {
    super.didInsertElement();
    this.loadActivity();
  }
}
