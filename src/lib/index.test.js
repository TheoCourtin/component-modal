import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Composant Modal", () => {
  test("rend correctement", () => {
    const { getByTestId } = render(<Modal />);
    expect(getByTestId("modal")).toBeInTheDocument();
  });

  test("affiche le titre et le message correctement", () => {
    const title = "Exemple de titre";
    const message = "Exemple de message";
    const { getByText } = render(<Modal title={title} message={message} />);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(message)).toBeInTheDocument();
  });

  test("appelle la fonction closeModal lors du clic sur le bouton de fermeture", () => {
    const closeModal = jest.fn();
    const { getByTestId } = render(<Modal closeModal={closeModal} />);
    const closeButton = getByTestId("close-button");
    fireEvent.click(closeButton);
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
