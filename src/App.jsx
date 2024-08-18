
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Calculator from './components/Calculator/Calculator.jsx';
import Home from './components/Home/Home.jsx';
import Greeting from './components/Greeting/Greeting.jsx';
import RandomBackground from './components/RandomBackground/RandomBackground.jsx';
import UserRegistration from './components/UserRegistration/UserRegistration.jsx';
import TaskList from './components/TaskList/TaskList.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/greeting"
          element={
            <Layout>
              <Greeting />
            </Layout>
          }
        />
        <Route
          path="/calculator"
          element={
            <Layout>
              <Calculator />
            </Layout>
          }
        />
        <Route
          path="/random-background"
          element={
            <Layout>
              <RandomBackground />
            </Layout>
          }
        />
        <Route
          path="/user-registration"
          element={
            <Layout>
              <UserRegistration />
            </Layout>
          }
        />
        <Route
          path="/task-list"
          element={
            <Layout>
              <TaskList />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
