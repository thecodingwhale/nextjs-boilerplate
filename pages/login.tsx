import React from 'react';
import FormLogin from '@components/FormLogin';
import { Row, Col } from 'antd';

export default () => (
  <React.Fragment>
    <Row>
      <Col span={6} offset={9}>
        <FormLogin
          onSubmit={values => {
            console.log('values: ', values);
          }}
        />
      </Col>
    </Row>
  </React.Fragment>
);
