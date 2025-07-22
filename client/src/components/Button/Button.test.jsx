import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { describe, test, expect, vi } from 'vitest';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies primary variant styles by default', () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByTestId('button');
    expect(button).toHaveClass('bg-blue-600');
    expect(button).toHaveClass('text-white');
  });

  test('applies secondary variant styles when specified', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByTestId('button');
    expect(button).toHaveClass('bg-gray-200');
    expect(button).toHaveClass('text-gray-800');
  });

  test('applies disabled styles when disabled', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByTestId('button');
    expect(button).toHaveClass('opacity-50');
    expect(button).toHaveClass('cursor-not-allowed');
    expect(button).toBeDisabled();
  });

  test('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByTestId('button');
    expect(button).toHaveClass('custom-class');
  });

  test('sets the correct button type', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByTestId('button');
    expect(button).toHaveAttribute('type', 'submit');
  });
});