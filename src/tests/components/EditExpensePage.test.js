import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import toJSON from 'enzyme-to-json';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = {push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage 
      startEditExpense={startEditExpense} 
      startRemoveExpense={startRemoveExpense} 
      history={history} 
      expense={expenses[1]}
    />);
});

test ('should render EditExpensePage correctly',() => {
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle edit expense', () =>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle remove expense', () =>{
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[1].id});
});