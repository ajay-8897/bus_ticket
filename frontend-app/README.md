# Frontend Bus Booking Application

This project is a frontend application for a bus booking system built with React and TypeScript. It includes user authentication, city selection, bus listings, seat selection, payment confirmation, and ticket display functionalities.

## Features

- **User Authentication**: 
  - Sign In and Sign Up pages using a token-based system with Passport.js.
  - Password hashing for secure user credentials.

- **User Profile**: 
  - A profile page displaying user information.

- **City Selection**: 
  - A dropdown interface for selecting starting and destination cities.

- **Bus Listings**: 
  - A page displaying a list of available buses from different companies.

- **Seat Selection**: 
  - A user-friendly interface for selecting seats with dynamic forms for passenger data.

- **Payment Confirmation**: 
  - A confirmation page for debit card data using the `react-credit-cards` library.

- **Ticket Display**: 
  - A final ticket component showing passenger details and a transaction ID.

## Project Structure

```
frontend-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── SignIn.tsx
│   │   │   └── SignUp.tsx
│   │   ├── Profile
│   │   │   └── ProfilePage.tsx
│   │   ├── Cities
│   │   │   └── CitySelector.tsx
│   │   ├── Buses
│   │   │   └── BusList.tsx
│   │   ├── Seats
│   │   │   └── SeatSelection.tsx
│   │   ├── Payment
│   │   │   └── CardConfirmation.tsx
│   │   └── Ticket
│   │       └── TicketDisplay.tsx
│   ├── pages
│   │   ├── SignInPage.tsx
│   │   ├── SignUpPage.tsx
│   │   ├── ProfilePage.tsx
│   │   ├── CitySelectionPage.tsx
│   │   ├── BusListPage.tsx
│   │   ├── SeatSelectionPage.tsx
│   │   ├── CardConfirmationPage.tsx
│   │   └── TicketPage.tsx
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   ├── auth.ts
│   │   └── api.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd frontend-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Technologies Used

- React
- TypeScript
- Passport.js (for authentication)
- react-credit-cards (for payment confirmation)

## License

This project is licensed under the MIT License.