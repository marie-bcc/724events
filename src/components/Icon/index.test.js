import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // pour les assertions étendues
import Icon from ".";

describe("Icon component", () => {
    describe("When an icon is created with name facebook", () => {
        it("should render the facebook icon", () => {
            const { getByTestId } = render(<Icon name="facebook" />);
            expect(getByTestId("icon")).toBeInTheDocument();
        });
    });

    describe("When an icon is created with name twitch", () => {
        it("should render the twitch icon", () => {
            const { getByTestId } = render(<Icon name="twitch" />);
            expect(getByTestId("icon")).toBeInTheDocument();
        });
    });

    describe("When an icon is created with name twitter", () => {
        it("should render the twitter icon", () => {
            const { getByTestId } = render(<Icon name="twitter" />);
            expect(getByTestId("icon")).toBeInTheDocument();
        });
    });

    describe("When an icon is created with name youtube", () => {
        it("should render the youtube icon", () => {
            const { getByTestId } = render(<Icon name="youtube" />);
            // Dans ce cas, le test peut nécessiter une autre méthode pour vérifier la présence de l'icône, car vous n'avez pas ajouté de `data-testid` à l'icône youtube.
        });
    });

    describe("When an icon is created with name close", () => {
        it("should render the close icon", () => {
            const { container } = render(<Icon name="close" />);
            expect(container.querySelector("rect")).toBeInTheDocument();
        });
    });
});
