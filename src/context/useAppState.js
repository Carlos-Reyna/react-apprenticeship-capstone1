import React, { useReducer } from 'react';
import appContext from './appContext';
import appReducer from './appReducer';

function AppState(props) {
  const initialState = {
    searchTerm: '',
    videos: [],
    styles: {
      customCard: { backgroundColor: '#fff', fontColor: '#000' },
      layout: { backgroundColor: 'antiquewhite', fontColor: '#000000' },
    },
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  const setVideos = (videos) => {
    dispatch({ payload: videos, type: 'UPDATE_VIDEOS' });
  };

  const setSearchTerm = (newValue) => {
    dispatch({ payload: newValue, type: 'UPDATE_SEARCH_TERM' });
  };

  const toggleStyles = (value) => {
    let styles = {
      customCard: { backgroundColor: '#1C1C1C', fontColor: '#B9B8B8' },
      layout: { backgroundColor: '#1C1C1C', fontColor: '#000000' },
    };

    let newStyles = value ? styles : initialState.styles;

    dispatch({ payload: value, type: 'UPDATE_UI_MODE', styles: newStyles });
  };

  return (
    <appContext.Provider
      value={{
        videos: state.videos,
        searchTerm: state.searchTerm,
        styles: state.styles,
        setVideos,
        setSearchTerm,
        toggleStyles,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
}

export default AppState;
