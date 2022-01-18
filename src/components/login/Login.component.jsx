import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import loginApi from '../../utils/login.api';
import appContext from '../../context/appContext';
import {
  CustomModalHeader,
  CustomModalBody,
  CustomModalFooter,
} from '../CustomElements';
function Login({ show, setShow }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const thisContext = useContext(appContext);
  const { setSession, styles } = thisContext;

  const handleClose = () => {
    setShow(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginApi(userName, password);
      setSession(response);
      setUserName('');
      setPassword('');
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <CustomModalHeader
        closeButton
        elementbackground={styles.customCard.backgroundColor}
        color={styles.customCard.fontColor}
      >
        <Modal.Title>Login</Modal.Title>
      </CustomModalHeader>
      <CustomModalBody
        elementbackground={styles.customCard.backgroundColor}
        color={styles.customCard.fontColor}
      >
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              title="login-input-username"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              title="login-input-password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </CustomModalBody>
      <CustomModalFooter
        elementbackground={styles.customCard.backgroundColor}
        color={styles.customCard.fontColor}
      >
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          title="btn-login-submit"
          onClick={(e) => handleLogin(e)}
        >
          Submit
        </Button>
      </CustomModalFooter>
    </Modal>
  );
}

export default Login;
