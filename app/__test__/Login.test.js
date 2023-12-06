import Login, { validateEmail } from "../components/Login";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const onSubmit = jest.fn();

describe("Test the Login Component", () => {
  test("render the login form submit button on the screen", async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });

  test("should be failed on email validation ", () => {
    const testEmail = "dipesh.com";
    expect(validateEmail(testEmail)).not.toBe(true);
  });

  test("email input field should accept email ", () => {
    render(<Login />);
    const email = screen.getByPlaceholderText("Enter email");
    userEvent.type(email, "dipesh");
    expect(email.value).not.toMatch("dipesh.malvia@gmail.com");
  });

  test("passport input should have type password ", () => {
    render(<Login />);
    const password = screen.getByPlaceholderText("Password");
    expect(password).toHaveAttribute("type", "password");
  });

  test("should be able to reset the form ", () => {
    const { getByLabelText, getByTestId } = render(<Login />);
    const resetBtn = getByTestId("reset");
    const emailInputNode = getByLabelText("Email");
    const passwordInputNode = getByLabelText("Password");
    fireEvent.click(resetBtn);
    expect(emailInputNode.value).toMatch("");
    expect(passwordInputNode.value).toMatch("");
  });

  
});