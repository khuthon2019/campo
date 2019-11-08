import {observable, action} from 'mobx';

class RankingStore {
  @observable rankings = [];
}
export default new RankingStore();
