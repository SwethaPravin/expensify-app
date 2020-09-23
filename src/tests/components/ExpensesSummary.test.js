import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import toJSON from 'enzyme-to-json';


test('should render expenses summary with 1 expenses', () =>{
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal ={9400}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render expenses summary with 2 expenses', () =>{
  const wrapper = shallow(<ExpensesSummary  expenseCount={2} expensesTotal ={9400}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
});