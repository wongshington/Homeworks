import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor() {
    super();
    this.state = {searchTerm: 'searchTerm'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //why do we bind these here?

  }

  componentDidMount() {
    this.props.fetchSearchGiphys('searchTerm');
  }

  handleChange(e) {
    this.setState({searchTerm : e.currentTarget.value});
    //currentTarget is a predefined react keyword?
  }

  handleSubmit(e) {
    e.preventDefault();
    // const searchTerm =Object.assign({}, this.state);
    let searchTerm = this.state.searchTerm;
    this.props.fetchSearchGiphys(searchTerm);
    //
  }
//the render is automatically called wheneever state changes because...?
  render () {
    const { giphys } = this.props;


    return (
      <div>
        <form className = "search-bar">
          <input value = {this.state.searchTerm} onChange = {this.handleChange} />
          <button type = "submit" onClick = {this.handleSubmit}>Search</button>
        </form>
        <GiphysIndex giphys = {giphys} />
      </div>
    );
  }
}
//when is the return statement in brackets vs parens?
//where did this giphysIndex html thing come from?


export default GiphysSearch;
