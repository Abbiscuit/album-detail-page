import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
const width = Dimensions.get('screen').width;

const Album = ({ imageUri }) => {
  return (
    <AlbumWrapper>
      <Image
        source={{
          uri: imageUri,
        }}
      />
    </AlbumWrapper>
  );
};

export default Album;

/* Album */
const AlbumWrapper = styled.View`
  /* background-color: #ddd; */
  width: ${width - 16 * 2}px;
  height: 250px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
