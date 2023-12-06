import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Random from '@/pages/random';

it("should render", () => {
    render(<Random />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
});
it("should render", () => {
    render(<Random />);
    const text = screen.getByText("Three Random facts");
    expect(text).toBeInTheDocument();
});