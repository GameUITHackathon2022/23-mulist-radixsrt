import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout/Main";
import Dashboard from "./components/Layout/Dashboard";
import Home from "./pages/Home";
import { LoginProvide } from "./provider/LoginProvider";
import DashboardPage from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Contributor from "./pages/contributor";
const App = () => {
  return (
    <Router>
      <Routes>
        {
          <Fragment>
            <Route path="/" element={
              <LoginProvide>
                <Layout>
                  <Home />
                </Layout>
              </LoginProvide>
            } />

            <Route path="/dashboard" element={
              <LoginProvide>
                <Dashboard>
                  <DashboardPage />
                </Dashboard>
              </LoginProvide>
            } />

            <Route path="/LogIn" element={
              <LoginProvide>
                <Layout>
                  <Login />
                </Layout>
              </LoginProvide>
            } />
            <Route path="/Contributors" element={
              <LoginProvide>
                <Layout>
                  <Contributor/>
                </Layout>
              </LoginProvide>
            } />
            <Route path="/SignUp" element={
              <LoginProvide>
                <Layout>
                  <SignUp />
                </Layout>
              </LoginProvide>
            } />
          </Fragment>
        }
      </Routes>
    </Router>
  )
}

export default App;
