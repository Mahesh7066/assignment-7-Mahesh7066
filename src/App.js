import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Home from './components/Home';
import Filter from './components/Filter';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/filter' component={Filter} />
        <Route path="/details" component={Details} />
      </Layout>
    </Router>
  );
}

export default App;
