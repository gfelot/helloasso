import React, { Component } from 'react';
import Header from '../Components/Header'

const Main = Page => props => (
  <section className="hero is-primary is-fullheight">
    <Header />
    <div className="hero-body">
      <div className="container">
        <Page {...props} />
      </div>
    </div>
  </section>
)

export default Main;
