import React, { cloneElement } from "react";
import Weather from "../weather";
import { Provider } from "mobx-react";
import { shallow, mount } from "enzyme";
import Card from "../../../common/Component/Card/card";

import firstDayMockData from "../../../__mockdata__/firstDayMockData";
import store from "../../../entities/setUpStore";
import { Button, Typography, RadioGroup } from "@material-ui/core";

describe("WeatherCollection", () => {
  // it("should render correctly", () => {
  //   let wrapper = shallow(
  //     <Provider {...store}>
  //       <Weather />
  //     </Provider>
  //   );

  //   expect(wrapper.html()).toMatchSnapshot();
  // });

  describe("action", () => {
    it("close button click", () => {
      // const onClose = jest.fn();
      const handleSubmit = jest.fn();
      const setValue = jest.fn();
      const changeData = jest.fn();
      let wrapper = mount(
        <Provider {...store}>
          <Weather />
        </Provider>
      );
      const radio = wrapper.find('.test');
      const buttons = wrapper.find(Button);
      const p = wrapper.find(Typography);
      const inputs = wrapper.find('.in')

      // console.log(radio.debug(),"this is debug")
      console.log(
        "this is value"
      );
      inputs.simulate("change")

      // expect(radio.props('value')).toBe('celcius')
      // buttons.simulate("click");
      // wrapper.update()
      console.log(p.at(2).debug());
      // expect(p.at(2).props().children).toBe('celcius')
      // console.log(radio.props().value,'radio')
      // console.log(p.at(2).props().children,"typo")
      const news = wrapper.find(Typography);
      // console.log(news.at(2).debug(), "this is new");

      // wrapper.update()
      // const handleChange = jest.spyOn(React, "useState");        // console.log(radio.props().value,'radio')
      // console.log(p.at(2).props().children,"typo")
      // handleChange.mockImplementation(value => [value, setValue])
      // expect(changeData).toHaveBeenCalled()
      expect(p.at(2).text()).toBe("celcius");
    });
  });
});
