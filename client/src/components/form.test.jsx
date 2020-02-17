import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import Form from "./form";

test("input on form renders", () => {
  const { getByTestId } = render(<Form />);

  const nameSearchInput = getByTestId('nameSearch')

  expect(nameSearchInput).toBeInTheDocument()

});

test("inputs on ContactForm are registering", () => {
  const { getByTestId } = render(<Form />);

  const nameSearchInput = getByTestId('nameSearch')

  fireEvent.change( nameSearchInput, {target: {value: "testing player name"}})

  expect(nameSearchInput.value).toBe("testing player name")

})