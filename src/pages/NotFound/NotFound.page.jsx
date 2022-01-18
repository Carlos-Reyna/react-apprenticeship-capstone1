import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function NotFound() {
  return (
    <Container>
      Requested page not found, return to <Link to={'/home'}> home</Link>
    </Container>
  );
}

export default NotFound;
