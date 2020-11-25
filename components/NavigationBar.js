import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const NavigationBar = () => {
  return (
    <NavigationBarWrapper>
      <BackIcon>
        <Ionicons name="ios-arrow-back" size={24} color="black" />{' '}
      </BackIcon>

      <SearchIcon>
        <Ionicons name="ios-search" size={24} color="black" />
      </SearchIcon>
      <QRIcon>
        <Ionicons name="ios-qr-scanner" size={24} color="black" />
      </QRIcon>
    </NavigationBarWrapper>
  );
};

export default NavigationBar;

/* NavigationBar */
const NavigationBarWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 8px;
`;

const BackIcon = styled.Text`
  flex: 1;
`;

const SearchIcon = styled.Text`
  margin-right: 16px;
`;

const QRIcon = styled.Text``;
