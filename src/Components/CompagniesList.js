import React, { Component } from 'react';
import uuid from 'uuid/v4'
import Main from '../Layout/Main'
import { getOrganizations, getActions } from '../API';
import { Link } from "react-router-dom";

class CompagniesList extends Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    try {
      const response = await getOrganizations();
      this.setState({ data: response })

    } catch (error) {
      console.log(error);
    }
  }

  handleClick = async (id) => {
    try {
      const response = await getActions(id)
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { data } = this.state;

    return (
      <div className="hero-body">
        <div className="container">
          {data && data.resources && data.resources.map(organisation => (
            <Link to={`/compagnie/${organisation.id}/actions`} key={uuid()}>
              <div className="card" onClick={() => this.handleClick(organisation.id)}>
                <header className="card-header">
                  <p className="card-header-title">
                    {organisation.name}
                  </p>
                  <figure className="card-header-icon image is-128x128">
                    <img src={organisation.logo} />
                  </figure>

                </header>
                <div className="card-content">
                  <h2 className="title has-text-black">
                    Already fund : {organisation.funding} €
                  </h2>
                  <br />
                  <a className="subtitle" href={organisation.profile}>
                    Voir le Profile
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

export default Main(CompagniesList);