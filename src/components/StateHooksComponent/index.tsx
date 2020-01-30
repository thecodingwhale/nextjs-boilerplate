import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

interface Props {}

const StateHooksComponent: React.FC<Props> = ({}) => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component will be unmount');
    };
  }, []);

  useEffect(() => {
    console.log(`Any state changed Name: ${name}, Address: ${address}`);
  });

  useEffect(() => {
    console.log(`Name changed: ${name}`);
  }, [name]);

  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item>
        <Input type="text" placeholder="name" value={name} onChange={onNameChange} />
        <Input type="text" placeholder="address" value={address} onChange={onAddressChange} />
        <Button htmlType="submit" type="primary">
          {' '}
          Submit{' '}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StateHooksComponent;
