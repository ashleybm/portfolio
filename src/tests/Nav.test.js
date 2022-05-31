import { render, screen } from '@testing-library/react';
import Nav from './components/Nav';

test('renders Navigation bar', () => {
    render(<Nav />);
    const logo = screen.getByAltText("AshleyMCopelandLogo");
    const home = screen.getByText("Home");
    const resume = screen.getByText("Resume");
    expect(logo).toBeInTheDocument();
    expect(home).toBeInTheDocument();
    expect(resume).toBeInTheDocument();
});