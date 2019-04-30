import React from 'react';
import { connect } from "react-redux";
import Form from './components/Form';

function App({ articles }) {
  return (
    <div className="App">
      <header className="App-header">
        <p>React + Redux</p>
      </header>
      <ul>
        {articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { articles: state.articles };
};

export default connect(mapStateToProps)(App);
