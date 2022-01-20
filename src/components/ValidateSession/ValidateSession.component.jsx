import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import appContext from '../../context/appContext';
function ValidateSession(props) {
  const thisContext = useContext(appContext);
  const { isLogged } = thisContext;

  if (isLogged) {
    return <>{props.children}</>;
  } else {
    return (
      <>
        <Redirect to={'/'}></Redirect>
      </>
    );
  }
}

export default ValidateSession;
