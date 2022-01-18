import React from 'react';
import { Title } from '../CustomElements';
import { Link } from 'react-router-dom';
function ErrorMessage({ message, styles }) {
  return (
    <Title fontColor={styles.layout.fontColor}>
      {message}, you can try return to <Link to={'/'}>Home </Link>
    </Title>
  );
}

export default ErrorMessage;
