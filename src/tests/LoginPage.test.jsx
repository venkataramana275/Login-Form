import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import'@testing-library/jest-dom';
import LoginPage from "../component/LoginPage";

describe('LoginPage', () => {
    test('renders login form elements', () => {
      render(< LoginPage />);


      expect(screen.getByRole('heading', {name : /Welcome to SkyChat🤖/i})).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
      expect(screen.getByRole('button', {name: /login/i})).toBeInTheDocument();
    });

    test('allows user to type in inputs', () => {
        render( <LoginPage/> );

        const emailInput = screen.getByPlaceholderText(/enter your email/i);
        const passwordInput = screen.getByPlaceholderText(/enter your password/i);

        fireEvent.change(emailInput, {target: {value: 'test@example.com'} });
        fireEvent.change(passwordInput, {target: {value: 'my password'} });

        expect(emailInput.value).toBe('test@example.com');
        expect(passwordInput.value).toBe('my password');
      
    });

    test('shows alert on  form submit', () => {
       window.alert = jest.fn();
       render( <LoginPage />)


       fireEvent.change(screen.getByPlaceholderText(/email/i), {
         target: {value: 'venkat@example.com'},
       });
       fireEvent.change(screen.getByPlaceholderText(/password/i), {
         target: {value: '12345'},
       });

       fireEvent.click(screen.getByRole('button', {name: /login/i}));

       expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining('venkat@example.com')
       );
    });
});