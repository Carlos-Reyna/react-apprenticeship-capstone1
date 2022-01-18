import React, { useContext } from 'react';
import appContext from '../../context/appContext';
import styled from 'styled-components';

const LayoutStyled = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.backgroundColor};
`;
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const thisContext = useContext(appContext);

  const { styles } = thisContext;
  return (
    <LayoutStyled backgroundColor={styles.layout.backgroundColor}>
      {children}
    </LayoutStyled>
  );
}

export default Layout;
