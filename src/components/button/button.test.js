"use strict";

import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

import Button from "./index";

const noop = () => null;

test("should Button default to match snapshot", () => {
    const tree = renderer
        .create(<Button onClick={noop}> Click Me</Button>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

test("should Button success to match snapshot", () => {
    const tree = renderer
        .create(
            <Button onClick={noop} kind="success">
                Click me Success
            </Button>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});

test("should Button danger to match snapshot", () => {
    const tree = renderer
        .create(
            <Button onClick={noop} kind="danger">
                Click me Danger
            </Button>
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
});

test('Button with prop kind = "success" should has class "-success"', () => {
    const wrapper = shallow(
        <Button onClick={noop} kind="success">
            Button Success
        </Button>
    );
    expect(wrapper.hasClass("-success")).toBe(true);
    expect(wrapper.hasClass("-danger")).toBe(false);
});

test('Button with prop kind = "danger" should has class "-danger"', () => {
    const wrapper = shallow(
        <Button onClick={noop} kind="danger">
            Button Danger
        </Button>
    );
    expect(wrapper.hasClass("-danger")).toBe(true);
    expect(wrapper.hasClass("-success")).toBe(false);
});
