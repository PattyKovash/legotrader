import React from 'react';
import RouteProps from 'react-route-props';
import $ from 'jquery';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import NewListing from './NewListing.jsx';
import ViewListing from './ViewListing.jsx';
import UserListings from './UserListings.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getListings = this.getListings.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.state = {
      listings: [],
      category: ''
    };
  }

  // poll server every few seconds

  componentDidMount() {
    this.getListings();
    setInterval(() => {
      this.getListings
    }, 1000)
  }

  handleCategoryClick(category) {
    category = category || '';
    this.setState({ category: category });
    this.getListings();
  }

  getListings() {
    // add this.state.category to params
    $.ajax({
      url: '/listings',
      success: (listings) => {
        this.setState({
          listings: listings
        })
        console.log('---------------Listings', listings)

      },
      error: (err) => {
        console.log('Get listings error', err);
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/sign-up' component={ SignUp }/>
        <Route exact path='/sign-in' component={ SignIn }/>
        <RouteProps path='/new-listing' component={ NewListing } moreProps={5}/> 
        <RouteProps path='/user-listings' component={ UserListings } someProps={'Stringy String'} moreProps={ 5 }/> 
        <Route path='/view-listing' component={ ViewListing }/>
      </Switch>
    )
  }
}

export default App;


