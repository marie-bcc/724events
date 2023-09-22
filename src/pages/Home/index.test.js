import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import Page from "./index";
import { waitFor } from "@testing-library/react";

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
      await waitFor(() => screen.getByTestId("success-message"));

    });
  });
});

// Mockez le hook useData
jest.mock('../../contexts/DataContext', () => ({
  useData: () => ({
    last: {
      cover: '/path/to/fake/image.jpg',
      title: 'Fake Event',
      date: '2023-09-21',
    },
  }),
}));

describe("When a page is created", () => {

  // Test pour vérifier que la liste des événements est affichée
  it("displays the list of events", () => {
    render(<Page/>);
    const eventsTitle = screen.getByTestId("Nos réalisations");
    expect(eventsTitle).toBeInTheDocument();
  });
  
  // Test pour vérifier que la liste des membres de l'équipe est affichée
  it("displays the team members list", () => {
    render(<Page />);
    const teamTitle = screen.getByTestId("Notre équipe");
    expect(teamTitle).toBeInTheDocument();

    const samiraName = screen.getByText("Samira");
    expect(samiraName).toBeInTheDocument();


  });

  // Test pour vérifier que le pied de page est affiché
  it("displays the footer", () => {
    render(<Page/>);
    const contactInfo = screen.getByText("Contactez-nous");
    expect(contactInfo).toBeInTheDocument();
    
    const description = screen.getByText(/^Une agence événementielle/);
    expect(description).toBeInTheDocument();
  });

  // Test pour vérifier qu'une carte d'événement, avec le dernier événement, est affichée
  it("displays an event card with the last event", () => {
    render(<Page />);
    const lastEventTitle = screen.getByText("Fake Event");
    expect(lastEventTitle).toBeInTheDocument();

    // Vous pouvez également vérifier d'autres éléments de cette carte, comme la date ou le label "boom"
    const boomLabel = screen.getByText('boom');
    expect(boomLabel).toBeInTheDocument();
  });
});





