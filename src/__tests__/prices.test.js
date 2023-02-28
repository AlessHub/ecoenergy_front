import React from "react";
import {
  render,
  waitFor,
  screen,
  fireEvent,
  getByText,
} from "@testing-library/react";
import ElectricityPrices from "../components/layout/organization/ElectricityPrices";
import "@testing-library/jest-dom";

import { useState as useStateMock } from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  PaginationItem,
  Pagination,
} from "@mui/material";
import { createRenderer } from "react-dom/test-utils";

/**
 * @jest-environment jsdom
 */

describe("ElectricityPrices", () => {
  // renderizamos el componente, para ver que no de errores

  it("renders the component", () => {
    render(<ElectricityPrices />);
  });

  //segundo test, hacemos lo mismo pero en este caso miramos que tenga el titulo con un expect
  it("renders without throwing an error", async () => {
    render(<ElectricityPrices />);
    await waitFor(() =>
      expect(screen.getByText("Today's electricity prices")).toBeInTheDocument()
    );
  });

  //tercer test, muy parecido a los otros dos, pero aqui buscamos por ID, el cual está definido en el tag como
  //data-testid
  it('renders the "Price now" box', async () => {
    render(<ElectricityPrices />);
    const priceNow = await screen.findByTestId("price-now");
    expect(priceNow).toBeInTheDocument();
  });
});

describe("ElectricityPrices pagination", () => {
  it("should disable the previous button on the first page", () => {
    const { getByLabelText } = render(<ElectricityPrices />);
    const previousPageButton = getByLabelText("Go to previous page");
    expect(previousPageButton).toBeDisabled();
  });

  it("should navigate to page 2 when clicking on the second page button", () => {
    const { getByLabelText, getByTestId } = render(<ElectricityPrices />);
    const secondPageButton = getByLabelText("Go to page 2");
    fireEvent.click(secondPageButton);
    const currentPageIndicator = getByTestId("pagination-current-page");
    const currentPageNumber = currentPageIndicator.getAttribute("test-page");

    expect(currentPageNumber).toBe("2");
  });

  it("should navigate to page 3 when clicking on the third page button", () => {
    const { getByLabelText, getByTestId } = render(<ElectricityPrices />);
    const thirdPageButton = getByLabelText("Go to page 3");
    fireEvent.click(thirdPageButton);
    const currentPageIndicator = getByTestId("pagination-current-page");
    const currentPageNumber = currentPageIndicator.getAttribute("test-page");

    expect(currentPageNumber).toBe("3");
  });

  // Este test no funciona, por alguna razon no puedo hacer update de la variable hasNextPage

  // it("should disable next button on last page", () => {
  //   const totalPages = 3;
  //   let currentPage = 1;
  //   let hasNextPage = true;
  //   const onNextClick = jest.fn();
  //   const { getByTestId } = render(
  //     <Pagination
  //       count={totalPages}
  //       page={currentPage}
  //       onChange={onNextClick}
  //       renderItem={(item) => {
  //         if (item.type === "next") {
  //           return (
  //             <PaginationItem
  //               {...item}
  //               data-testid="next-button"
  //               disabled={!hasNextPage}
  //             />
  //           );
  //         }
  //         return <PaginationItem {...item} />;
  //       }}
  //     />
  //   );
  
  //   // hacemos click hasta la última página
  //   const nextButton = getByTestId("next-button");
  //   while (currentPage < totalPages) {
  //     fireEvent.click(nextButton);
  //     currentPage++;
  //     hasNextPage = currentPage < totalPages; // update hasNextPage? No funciona
  
  //     if (currentPage === totalPages) {
  //       // si es la ultima página debería de estar disabled
  //       expect(nextButton).toBeDisabled();
  //     } else {
  //       // si no lo es, debería de estar habilitada
  //       expect(nextButton).not.toBeDisabled();
  //     }
  //   }
  // });
  
  
  
});
