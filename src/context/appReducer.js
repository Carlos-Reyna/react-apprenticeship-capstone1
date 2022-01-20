export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_VIDEOS':
      return { ...state, videos: action.payload };
    case 'UPDATE_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'UPDATE_UI_MODE':
      return { ...state, styles: action.styles };
    case 'USER_LOGIN':
      return { ...state, isLogged: true, userProps: action.payload };
    case 'USER_LOGOUT':
      return { ...state, isLogged: false, userProps: action.payload };
    default:
      return state;
  }
};
