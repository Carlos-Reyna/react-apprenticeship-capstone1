import React, { useReducer } from 'react';
import appContext from './appContext';
import appReducer from './appReducer';
import {
  USER_DEFAULT_PROPS,
  LIGHT_STYLE,
  DARK_STYLE,
  MOCK_CREDENTIALS,
} from '../utils/const';
function AppState(props) {
  const initialState = {
    searchTerm: '',
    videos: [],
    styles: {
      ...LIGHT_STYLE,
    },
    isLogged: false,
    userProps: USER_DEFAULT_PROPS,
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const setVideos = (videos) => {
    dispatch({ payload: videos, type: 'UPDATE_VIDEOS' });
  };

  const setSearchTerm = (newValue) => {
    dispatch({ payload: newValue, type: 'UPDATE_SEARCH_TERM' });
  };

  const toggleStyles = (value) => {
    let newStyles = value ? { ...DARK_STYLE } : { ...LIGHT_STYLE };

    dispatch({ payload: value, type: 'UPDATE_UI_MODE', styles: newStyles });
  };

  const setSession = (id) => {
    dispatch({ payload: { ...MOCK_CREDENTIALS, id: id }, type: 'USER_LOGIN' });
  };

  const logout = () => {
    dispatch({ payload: USER_DEFAULT_PROPS, type: 'USER_LOGOUT' });
  };

  return (
    <appContext.Provider
      value={{
        videos: state.videos,
        searchTerm: state.searchTerm,
        styles: state.styles,
        isLogged: state.isLogged,
        userProps: state.userProps,
        setVideos,
        setSearchTerm,
        toggleStyles,
        setSession,
        logout,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
}

export default AppState;
