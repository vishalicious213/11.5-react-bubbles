import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('token') ? (
                <Component {...props} />
            ) : (
                <Redirect to='/' />
            )
        }
    />
);

export default PrivateRoute;

// Requirement 1. (line 4)
// It has the same API as `<Route />`

// Requirement 2. (line 5, <Route {...rest} render={} />)
// It renders a `<Route />` and passes all the props through to it.

// Requirement 3. (lines 8-12, ternary operator)
// It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.