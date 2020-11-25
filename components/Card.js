import React from 'react';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styled from 'styled-components';
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('screen').width;

const Card = () => {
  return (
    <CardWrapper>
      <Header>
        <Subtitle>{`Album`}</Subtitle>
        <Stars>
          <Ionicons name="ios-star" size={12} color="#999" />
          <Ionicons name="ios-star" size={12} color="#999" />
          <Ionicons name="ios-star" size={12} color="#999" />
          <Ionicons name="ios-star" size={12} color="#999" />
          <Ionicons name="ios-star" size={12} color="#999" />
        </Stars>
      </Header>

      <Title>{`Horses`}</Title>
      <Author>By {`Patti Smith`}</Author>
      <Date>1975・8 songs・43 min</Date>

      <Description>
        Horses has since been viewd by critics as one of the greatest and most
        influential albums not only in the history of the American punk rock
        movement, but also in the history of all rock and roll .
      </Description>
      <Category>
        <TouchableOpacity>
          <CategoryTitle>Punk</CategoryTitle>
        </TouchableOpacity>

        <TouchableOpacity>
          <CategoryTitle>Classic Rock</CategoryTitle>
        </TouchableOpacity>

        <TouchableOpacity>
          <CategoryTitle>Art Rock</CategoryTitle>
        </TouchableOpacity>
      </Category>
    </CardWrapper>
  );
};

export default Card;

/* Card */
const CardWrapper = styled.View`
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 16px;

  width: ${width - 16 * 2}px;

  /* margin-top: 100%; */
  margin-left: 16px;
  margin-right: 16px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

const Stars = styled.Text`
  flex-direction: row;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #222;

  margin-bottom: 16px;
`;

const Author = styled.Text`
  font-size: 14px;
  color: #222;
  margin-bottom: 8px;
`;

const Date = styled.Text`
  color: #999;
  margin-bottom: 16px;
`;

const Description = styled.Text`
  color: #999;
  line-height: 24px;
`;

const Category = styled.View`
  flex-direction: row;
  margin-top: 8px;
  margin-bottom: 8px;
`;
const CategoryTitle = styled.Text`
  font-size: 14px;
  color: #666;
  padding: 8px;
  background-color: #ddd;
  margin-right: 16px;
`;
