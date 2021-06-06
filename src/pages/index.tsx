import React, { useEffect } from 'react';
import { StyleProvider } from '@providers';
import MainView from '@view/MainView';
import HobbyView from '@view/HobbyView';

const robotoUrl = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';

const Home = () => {
  useEffect(() => {
  });


  return (
    <StyleProvider fonts={[robotoUrl]}>
      <MainView />
      <HobbyView />
    </StyleProvider>
  );
};

export default Home;
