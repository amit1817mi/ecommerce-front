import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'; // BrowserRouter will make the props available in components 
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import Dashboard from "./user/userDashboard";
import AdminDashboard from "./user/AdminDashboard";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} /> */}
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes