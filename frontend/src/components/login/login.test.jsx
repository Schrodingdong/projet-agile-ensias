/**
 * @jest-environment jsdom
 */

const { render, screen, cleanup } = require("@testing-library/react");
const { default: Login } = require(".");

test("Page d'authentification", () => {
  render(<Login />);
  const el = screen.findByTestId("login-page");
  expect(el).toBeInTheDocument();
});
