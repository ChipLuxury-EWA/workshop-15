import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../app';

const clickIncrement = async (times) => {
  const plusButton = await screen.getByText("+");
  for (let i=0; i<times; i++) {
    fireEvent.click(plusButton);
  }
}

const clickDecrement = async (times) => {
  const plusButton = await screen.getByText("-");
  for (let i=0; i<times; i++) {
    fireEvent.click(plusButton);
  }
}

test('Click seven times +', async () => {
  render(<App />);
  await clickIncrement(7)
  await waitFor(() => {
    expect(screen.getByText("SUPA-BOOM")).toBeInTheDocument()
  })
});

test('Click seven times -', async () => {
  render(<App />);
  await clickDecrement(7)
  await waitFor(() => {
    expect(screen.getByText("SUPA-BOOM")).toBeInTheDocument()
  })
});

test('Increment and then decrement', async () => {
  render(<App />);
  await clickIncrement(20)
  await clickDecrement(3)
  await waitFor(() => {
    expect(screen.getByText("BOOM")).toBeInTheDocument()
  })
});

test('Decrement and then increment', async () => {
  render(<App />);
  await clickDecrement(7)
  await clickIncrement(10)
  await waitFor(() => {
    expect(screen.getByText("3")).toBeInTheDocument()
  })
});

test('Click seven times +, then seven times - (to zero)', async () => {
  render(<App />);
  await clickIncrement(7);
  await clickDecrement(7);
  await waitFor(() => {
    expect(screen.getByText("BOOM")).toBeInTheDocument()
  })
});