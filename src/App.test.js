import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders content", () => {
  const note = {
    content: "Thisis a test",
    important: true,
  };
  const component = render(<App />);

  console.log(component);
});
