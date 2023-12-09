import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ButtonComponent extends Component {
  get isLink() {
    return this.args.route !== undefined;
  }
  @action
  onClick() {
    if (this.args.onClick) {
      this.args.onClick();
    }
  }
}
