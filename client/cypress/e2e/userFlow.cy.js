describe('User Flow', () => {
  it('should register and login a user', () => {
    // Register
    cy.visit('/register');
    cy.get('[data-test="name-input"]').type('Test User');
    cy.get('[data-test="email-input"]').type('test@example.com');
    cy.get('[data-test="password-input"]').type('password123');
    cy.get('[data-test="submit-button"]').click();

    // Should redirect to dashboard
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome, Test User').should('be.visible');

    // Logout
    cy.get('[data-test="logout-button"]').click();
    cy.url().should('include', '/login');

    // Login
    cy.get('[data-test="email-input"]').type('test@example.com');
    cy.get('[data-test="password-input"]').type('password123');
    cy.get('[data-test="submit-button"]').click();

    // Should redirect to dashboard again
    cy.url().should('include', '/dashboard');
  });
});