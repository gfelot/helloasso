import React, { Component } from 'react';
import { getActions } from "../API";
import uuid from 'uuid/v4'
import Main from '../Layout/Main'

class ActionsList extends Component {
  state = {
    data: {}
  };

  async componentDidMount() {
    try {
      const response = await getActions(this.props.match.params.id);
      this.setState({ data: response })

    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { data } = this.state;

    return (
      <div className="hero-body">
        <div className="container">
        {/* {data && data.resources &&

        } */}
        </div>
      </div>
    );
  }
}

export default Main(ActionsList);