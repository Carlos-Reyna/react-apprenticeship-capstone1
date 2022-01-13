import React, { useState } from 'react';
import './Header.styles.css';
import { Container, Form, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const HeaderButton = styled.button`
  background-color: #1c1c1c;
  color: #f1f1f1;
  border-radius: 0;
  border: none;
  margin: 0;
`;

function Header({ searchTerm, setSearchTerm, handleSearch }) {
  const [switchValue, setSwitchValue] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSwitch = () => {
    setSwitchValue(!switchValue);
  };

  return (
    <div className="header">
      <Container className="form-search">
        <Row>
          <Col xs={12} sm={6} md={6}>
            <Form>
              <Form.Group controlId="formSearch">
                <Form.Control
                  type="text"
                  data-testid="header-input-search"
                  placeholder="..."
                  value={searchTerm}
                  onChange={(e) => handleChange(e)}
                  onKeyPress={(e) => handleSearch(e)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col sm={5} md={5} className="d-none d-sm-block d-xs-block">
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                data-testid="header-input-switch"
                label="Toggle Style"
                checked={switchValue}
                onChange={handleSwitch}
                style={{ float: 'right' }}
              />
            </Form>
          </Col>
          <Col sm={1} md={1} className="d-none d-sm-block d-xs-block">
            <HeaderButton data-testid="header-btn-login">
              <i
                className="fa fa-user-circle fa-2x"
                style={{ float: 'right' }}
              ></i>
            </HeaderButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
