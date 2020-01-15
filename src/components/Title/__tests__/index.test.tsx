import React from 'react';
import { mount } from 'enzyme';
import Title from '../index';

describe('index page', () => {
  it('should have App component', () => {
    const subject = mount(<Title>Test</Title>);
    expect(subject.find('h1')).toBeTruthy();
  });
});
