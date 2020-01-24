import React from 'react';
import { Button as ButtonComponent } from 'antd';

function Button({ children }: { children: string }) {
  return <ButtonComponent>{children}</ButtonComponent>;
}

export default Button;
