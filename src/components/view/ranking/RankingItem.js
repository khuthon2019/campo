/* eslint no-useless-escape: 0 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import colors from '../../../colors/colors';

class RankingItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onPress = () => {
    const {onPress} = this.props;
    onPress && onPress();
  };

  render() {
    const {data} = this.props;

    return (
      <Container onPress={this.onPress}>
        <InnerContainer>
          <LeftContainer>
            <RankingText rank={data.rank}>{data.rank}위</RankingText>
          </LeftContainer>
          <MiddleContainer>
            <NameView>
              <Name numberOfLines={1} ellipsizeMode="tail">
                {data.name}
              </Name>
            </NameView>
          </MiddleContainer>
          <RightContainer>
          </RightContainer>
        </InnerContainer>
      </Container>
    );
  }
}

RankingItem.propTypes = {
  data: PropTypes.object.isRequired,
  firstRankVote: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  highlight: PropTypes.bool,
  borderBottom: PropTypes.bool,
};
RankingItem.defaultProps = {
  highlight: false,
  firstRankVote: 1,
  borderBottom: true,
};

const Container = styled.TouchableWithoutFeedback``;
const InnerContainer = styled.View`
  position: relative;
  padding: 19.5px 38px 19.5px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RankingText = styled.Text`
  font-weight: bold;
  color: ${props => (props.rank <= 3 ? colors.mainPink : colors.cloudyBlue)};
`;

const LeftContainer = styled.View`
  width: 33px;
`;

const MiddleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const NameView = styled.View`
  flex: 1;
  margin-right: 10px;
`;
const Name = styled.Text`
  font-weight: 700;
  font-size: 16;
  color: ${colors.slateGrey};
`;

const RightContainer = styled.View`
  margin-left: 25px;
`;

export default RankingItem;
