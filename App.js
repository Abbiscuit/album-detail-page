import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { ScrollView } from 'react-native-gesture-handler';

/* components */
import NavigationBar from './components/NavigationBar';
import Album from './components/Album';
import Card from './components/Card';

const App = () => {
  return (
    <Container>
      <SafeAreaView>
        <NavigationBar />

        <SectionTitle>My Library</SectionTitle>

        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <Album
            imageUri={`https://images.unsplash.com/photo-1536849249744-44e01e7a089d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGFsYnVtfGVufDB8fDB8&auto=format&fit=crop&w=800&q=60`}
          />
          <Album
            imageUri={`https://images.unsplash.com/photo-1594815140175-73be7105781d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDJ8fGFsYnVtfGVufDB8fDB8&auto=format&fit=crop&w=800&q=60`}
          />
          <Album
            imageUri={`https://images.unsplash.com/photo-1535992165812-68d1861aa71e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGFsYnVtfGVufDB8fDB8&auto=format&fit=crop&w=800&q=60`}
          />
        </ScrollView>

        <Card />
      </SafeAreaView>
    </Container>
  );
};

export default App;

const Container = styled.View`
  flex: 1;
`;

/* Section */
const SectionTitle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #222;

  margin-left: 16px;
  margin-bottom: 16px;
`;
