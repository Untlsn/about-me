import React from 'react';
import { StyleProvider } from '@providers';
import MainView from '@view/MainView';

const robotoUrl = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';

const Home = () => {
  return (
    <StyleProvider fonts={[robotoUrl]}>
      <MainView />
    </StyleProvider>
  );
};

export default Home;
