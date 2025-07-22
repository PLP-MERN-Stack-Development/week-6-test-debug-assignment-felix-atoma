export const renderWithProviders = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <UserContext.Provider {...providerProps}>{ui}</UserContext.Provider>,
    renderOptions
  );
};

export const mockUser = {
  _id: '1',
  name: 'Test User',
  email: 'test@example.com',
  token: 'fake-jwt-token',
};