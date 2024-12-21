import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../src/components/Shop";

describe("Shop Page", () => {
    it("renders each item from fake store api", () => {
        render(<Shop />);
        expect(screen.getAllByRole("listitem").find(lisitem => lisitem.textContent==="one"));
    });
});