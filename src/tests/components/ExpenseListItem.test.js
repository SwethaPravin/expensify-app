import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseListItems  from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';


test ('should render ExpenseListItem',() => {
  const wrapper = shallow(<ExpenseListItems  {...expenses[0]}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
