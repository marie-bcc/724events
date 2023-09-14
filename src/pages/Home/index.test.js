import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {

  // Test pour vérifier que la liste des événements est affichée
  it("a list of events is displayed", async () => {
    render(<Home />);
    await screen.findByText("Nos réalisations");  
    const eventList = await screen.findByTestId("event-list");  
    expect(eventList).toBeInTheDocument();
  });

  // Test pour vérifier que la liste des membres de l'équipe est affichée
  it("a list of people is displayed", async () => {
    render(<Home />);
    await screen.findByText("Notre équipe");  
    const peopleList = await screen.findByTestId("people-list");  
    expect(peopleList).toBeInTheDocument();
  });

  // Test pour vérifier que le pied de page est affiché
  it("a footer is displayed", async () => {
    render(<Home />);
    const footer = await screen.findByTestId("footer");  
    expect(footer).toBeInTheDocument();
    expect(screen.getByText("Contactez-nous")).toBeInTheDocument();
  });

  // Test pour vérifier qu'une carte d'événement, avec le dernier événement, est affichée
  it("an event card, with the last event, is displayed", async () => {
    render(<Home />);
    const lastEventCard = await screen.findByTestId("last-event-card");  
    expect(lastEventCard).toBeInTheDocument();
    expect(screen.getByText("boom")).toBeInTheDocument();
  });

});




