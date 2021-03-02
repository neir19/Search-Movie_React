import React, {Component} from 'react'

import  {Title} from '../Components/Title'
import {SearchForm} from '../Components/SearchForm'
import {MovieList} from '../Components/MovieList'

export class Home extends Component {

  state ={
    usedSEarch:false,
    results:[]};

  _handleResoults=(results)=>{
    this.setState({results,usedSEarch:true});
    
  }
  _renderResult=()=>{
    return this.state.results.length===0 
    ? <p>Sin resultados</p>
    : <MovieList movies={this.state.results}/>
  }

  render() {
    return(
      <div>
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResoults}/>
        </div> 
        {this.state.usedSEarch
        ?this._renderResult()
        :<small>Use the form to seach movie</small>}
      </div>
    )
  }
}