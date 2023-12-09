import Component from '@glimmer/component';

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
