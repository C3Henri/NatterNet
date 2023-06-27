import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, Modal } from 'antd';
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

const { Title } = Typography;

const LoginPage = () => {
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [isForgotPasswordModalVisible, setIsForgotPasswordModalVisible] = useState(false);

  const navigate = useNavigate();

  const handleLogin = values => {
    console.log('Received values of form: ', values);
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="welcome-section">
        <Title>Bem-vindo ao NatterNet</Title>
        <p>Proporcionando liberdade e pluralidade de ideias sem abrir mão da simplicidade e praticidade do app.</p>
      </div> 
      <div className="login-section"> 
        <Form onFinish={handleLogin}> 
          <Form.Item name="email" rules={[{ required: true, message: 'Por favor insira seu E-mail!' }]}>
            <Input placeholder="Email" /> 
          </Form.Item> 
          <Form.Item name="password" rules={[{ required: true, message: 'Por favor insira sua senha!' }]}>
            <Input.Password placeholder="Password" /> 
          </Form.Item> 
          <Form.Item> 
            <Button type="primary" htmlType="submit"> 
              Entrar
            </Button>
            <Button type="link" onClick={() => setIsRegisterModalVisible(true)}>
              Registrar-se
            </Button>
            <Button type="link" onClick={() => setIsForgotPasswordModalVisible(true)}>
              Esqueceu sua Senha?
            </Button>
          </Form.Item>
        </Form>

        <Modal
          title="Register"
          visible={isRegisterModalVisible}
          onCancel={() => setIsRegisterModalVisible(false)}
        >
          <Form>
            <Form.Item label="Email">
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Forgot Password"
          visible={isForgotPasswordModalVisible}
          onCancel={() => setIsForgotPasswordModalVisible(false)}
        >
          <Form>
            <Form.Item label="Email">
              <Input placeholder="Enter your email" />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default LoginPage;
