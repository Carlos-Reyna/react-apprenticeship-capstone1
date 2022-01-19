import React from 'react';
import Layout from '../Layout';
import Header from '../Header';
import HomeView from '../../pages/HomeView';
import AppState from '../../context/useAppState';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import VideoDetailsView from '../../pages/VideoDetailsView';
import FavoritesView from '../../pages/FavoritesView/FavoritesView.page';
import FavoritesViewDetail from '../../pages/FavoritesViewDetail/FavoritesViewDetail.page';
import ValidateSession from '../ValidateSession';
import NotFound from '../../pages/NotFound';
/*eslint-disable */
import firebase from '../../utils/firebaseConfig'; 
/*eslint-enable */
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
              <ValidateSession>
                <FavoritesView></FavoritesView>
              </ValidateSession>
            </Route>
            <Route path={'/playFavorites'}>
              <ValidateSession>
                <FavoritesViewDetail></FavoritesViewDetail>
              </ValidateSession>
            </Route>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AppState>
    </BrowserRouter>
  );
}

export default App;
