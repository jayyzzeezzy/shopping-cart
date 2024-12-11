import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App component", () => {
  it("renders snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  })

  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "THE ONLINE SHOP" }));
  });
});