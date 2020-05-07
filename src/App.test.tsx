import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount }from 'enzyme';
import App  from "./App";

    
configure({adapter: new Adapter()});

describe("App is rendering or not", () => {
  it("renders", () => {
    mount(<App />);
  });

  it("intially display  Elements -->CretaTask", () => {
    const wrapper = mount(< App />);
    expect(wrapper.find("input").text())
  })

  it("pressing the button crete the task", () => {
    const wrapper = mount(< App />);
    wrapper.find("button").simulate('click');
    expect(wrapper.find("li"))  
  })
});

