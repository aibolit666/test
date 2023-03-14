/**
 * @jest-environment jsdom
 */
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NewAccount from './NewAccount';

const renderApp = () => {
  render(<NewAccount />);
};

describe('NewAccount', () => {
  it('should show h2 text', () => {
    renderApp();
    expect(screen.getByText(/Открытие счёта/i)).toBeVisible();
  });
  it('should show title text', () => {
    renderApp();
    expect(screen.getByText(/Информация о счёте/i)).toBeVisible();
  });
  it('should show title text', () => {
    renderApp();
    expect(screen.getByText(/Подписанты по счёту/i)).toBeVisible();
  });
  it('should show title text', () => {
    renderApp();
    expect(screen.getByText(/Комиссия за открытие/i)).toBeVisible();
  });
});
