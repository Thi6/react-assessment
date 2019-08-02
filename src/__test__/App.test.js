import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import Routes from '../components/Routes';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<App />)
});

it('renders Routes component', () => {
  const wrapper = shallow(<App />);
  const content = <Routes />
  expect(wrapper.contains(content)).toEqual(true);
});

it("snapshot App", () => {
 // const wrapper = shallow(<App />);
 
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
