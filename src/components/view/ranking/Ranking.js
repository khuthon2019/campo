/* eslint no-useless-escape: 0 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import RankingItem from './RankingItem';
import faker from 'faker';

const RANKINGS = [
  {
    id: faker.random.uuid(),
    name: faker.lorem.word(),
    rank: 1,
  },
  {
    id: faker.random.uuid(),
    name: faker.lorem.word(),
    rank: 2,
  },
];

class Ranking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rankings: RANKINGS,
    };
  }

  componentDidMount() {}

  _keyExtractor = (item, _) => item.id;

  _onPressItem = item => {
    const {onPressItem} = this.props;
    onPressItem && onPressItem(item);
  };

  _onEndReached = () => {
  };

  _renderItem = ({item, index}) => {
    return (
      <RankingItem data={item} onPress={this._onPressItem.bind(this, item)} />
    );
  };

  render() {
    const {rankings} = this.state;

    return (
      <Container>
        <FlatList
          data={rankings}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onEndReachedThreshold={1}
          onEndReached={this._onEndReached}
        />
      </Container>
    );
  }
}

Ranking.propTypes = {
};

Ranking.defaultProps = {
};

const Container = styled.View`
  position: relative;
  flex: 1;
`;

export default Ranking;
