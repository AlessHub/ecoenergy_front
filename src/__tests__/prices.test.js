import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import ElectricityPrices from "../components/layout/organization/ElectricityPrices";
import "@testing-library/jest-dom";

/**
 * @jest-environment jsdom
 */

// renderizamos el componente, para ver que no de errores

describe("ElectricityPrices", () => {
  test("renders the component", () => {
    render(<ElectricityPrices />);
  });
});

jest.mock("axios");

//segundo test, hacemos lo mismo pero en este caso miramos que tenga el titulo con un expect

describe("ElectricityPrices", () => {
  it("renders without throwing an error", async () => {
    render(<ElectricityPrices />);
    await waitFor(() =>
      expect(screen.getByText("Today's electricity prices")).toBeInTheDocument()
    );
  });

  
});
