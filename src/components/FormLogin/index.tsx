import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

interface User {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (user: User) => void;
}

const FormLogin: React.FC<Props> = ({ onSubmit }) => {
  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit({
      email: 'aldren.terante@gmail.com',
      password: 'password',
    });
  };
  return (
    <Form onSubmit={onFormSubmit}>
      <Form.Item>
        <Input prefix={<Icon type="user" />} placeholder="Email" />
      </Form.Item>
      <Form.Item>
        <Input prefix={<Icon type="lock" />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
