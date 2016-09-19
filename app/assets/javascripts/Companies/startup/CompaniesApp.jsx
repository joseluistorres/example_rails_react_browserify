import React, { Component } from 'react';
import Companies from '../containers/Companies.jsx';

export default class CompaniesApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <Companies companies={this.props.companies} />
    );
  }
}
