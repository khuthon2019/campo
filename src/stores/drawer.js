import {action, observable} from 'mobx';

class DrawerStore {
  @observable visible = false;

  @action open = () => {
    this.visible = true;
  };

  @action close = () => {
    this.visible = false;
  };
}
export default new DrawerStore();
