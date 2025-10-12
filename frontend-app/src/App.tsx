import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import CitySelectionPage from './pages/CitySelectionPage';
import BusListPage from './pages/BusListPage';
import SeatSelectionPage from './pages/SeatSelectionPage';
import CardConfirmationPage from './pages/CardConfirmationPage';
import TicketPage from './pages/TicketPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import ContactPage from './pages/ContactPage';
import PaymentPage from './pages/PaymentPage';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/city-selection" component={CitySelectionPage} />
        <Route path="/buslistpage" component={BusListPage} />
        <Route path="/seat-selection" component={SeatSelectionPage} />
        <Route path="/card-confirmation" component={CardConfirmationPage} />
        <Route path="/ticket" component={TicketPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/payment" component={PaymentPage} />
      </Switch>
    </Router>
  );
};

export default App;