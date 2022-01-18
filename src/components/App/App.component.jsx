
import React from 'react';
import Layout from '../Layout';
import Header from '../Header';
import HomeView from '../../pages/HomeView';
import AppState from '../../context/useAppState';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import VideoDetailsView from '../../pages/VideoDetailsView';
import FavoritesView from '../../pages/FavoritesView/FavoritesView.page';
import FavoritesViewDetail from '../../pages/FavoritesViewDetail/FavoritesViewDetail.page';
import AuthProvider from '../AuthProvider';

function App() {
  
  return (
    <BrowserRouter>
      <AppState>
        <Layout>
          <Header />
          <Switch>
            <Route path={'/home'}>
              <HomeView />
            </Route>
            <Route path={'/play'}>
              <VideoDetailsView></VideoDetailsView>
            </Route>
            <Route path={'/favorites'}>
              <AuthProvider>
                <FavoritesView></FavoritesView>
              </AuthProvider>
            </Route>
            <Route path={'/playFavorites'}>
              <AuthProvider>
                <FavoritesViewDetail></FavoritesViewDetail>
              </AuthProvider>
            </Route>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </Switch>
        </Layout>
      </AppState>
    </BrowserRouter>

  );
}

export default App;
