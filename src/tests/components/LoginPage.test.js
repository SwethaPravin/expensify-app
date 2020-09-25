import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { LoginPage } from '../../components/LoginPage';

test ('should render Login Page',() => {
  const wrapper = shallow(<LoginPage startLogin={ ()=>{} }/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should call startLogin when login button clicked', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={ startLogin }/>);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});