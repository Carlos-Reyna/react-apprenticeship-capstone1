import React, { useState, useContext } from 'react';
import './Header.styles.css';
import { Container, Form, Row, Col, Dropdown } from 'react-bootstrap';
import appContext from '../../context/appContext';
import Login from '../login/Login.component';
import { useHistory } from 'react-router-dom';

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [show, setShow] = useState(false);
  let history = useHistory();
  const handleShow = () => setShow(true);
  const handleModal = () => setShow(!show);
  const thisContext = useContext(appContext);
  const {
    searchTerm,
    setSearchTerm,
    toggleStyles,
    userProps,
    isLogged,
    logout,
  } = thisContext;

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSwitch = () => {
    setSwitchValue(!switchValue);
    toggleStyles(!switchValue);
  };

  const navigateURL = (path) => {
    history.push(`/${path}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== searchValue) {
      setSearchTerm(searchValue);
      navigateURL('home');
    }
  };

  const handleLogout = () => {
    logout();
    navigateURL('home');
  };

  return (
    <div className="header">
      <Container className="form-search">
        <Row>
          <Col xs={12} sm={6} md={6}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group controlId="formSearch">
                <Form.Control
                  type="text"
                  title="header-input-search"
                  placeholder="..."
                  value={searchValue}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col
            sm={5}
            md={5}
            className="d-none d-sm-block d-xs-block switch-container"
          >
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                title="header-input-switch"
                label="Toggle Style"
                value={switchValue}
                onChange={handleSwitch}
                style={{ float: 'right' }}
              />
            </Form>
          </Col>
          <Col sm={1} md={1} className="d-none d-sm-block d-xs-block">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-menu-login"
                title="header-button-login"
              >
                {isLogged ? (
                  <img
                    src={userProps.avatarUrl}
                    className="user"
                    alt="user-logo"
                  ></img>
                ) : (
                  <i
                    className="fa fa-user-circle fa-2x user"
                    style={{ float: 'right' }}
                  ></i>
                )}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {isLogged ? (
                  <Dropdown.Item
                    onClick={() => {
                      navigateURL('favorites');
                    }}
                  >
                    Favorites
                  </Dropdown.Item>
                ) : null}
                {isLogged ? (
                  <Dropdown.Item
                    tag={'Link'}
                    onClick={(e) => {
                      handleLogout(e);
                    }}
                  >
                    Logout
                  </Dropdown.Item>
                ) : (
                  <Dropdown.Item onClick={handleModal}>Login</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>

            <Login
              show={show}
              setShow={setShow}
              handleShow={handleShow}
            ></Login>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
