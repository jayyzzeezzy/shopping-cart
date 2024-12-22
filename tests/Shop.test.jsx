import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "../src/components/Shop";

describe("Shop Page", () => {
    it("renders each item from fake store api", () => {
        render(<Shop />);
        expect(screen.getAllByRole("listitem").find(lisitem => lisitem.textContent==="one"));
    });

    it("renders a picture for each item", () => {
        render(<Shop />);
        const listItem = screen.getAllByRole("listitem");
        expect(listItem.find(item => item.image === "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"));
    })
});