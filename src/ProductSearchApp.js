import React, { Component } from 'react';
import debounce from 'debounce';
import SearchBox from './components/SearchBox';
import JsonData from './products.json';
import './ProductSearchApp.css';

class ProductSearchApp extends Component {

  constructor() {
    super();
    this.state = {
      searchResults: [],
      searchInput: ''
    };
    this.searchJson = debounce(this.searchJson.bind(this), 300);

    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  render() {
    return (
      <div className="ProductSearchApp">
        <header className="ProductSearchApp-header">
          <h1>Product Search Demo</h1>
        </header>
        <SearchBox inputHandler={this.handleSearchInput} searchInput={this.state.searchInput} searchResults={this.state.searchResults} />
      </div>
    );
  }

  componentWillUpdate() {
    this.searchJson();
  }

  handleSearchInput(event) {
    this.setState({
      searchInput: event.target.value
    });
  }

  searchJson() {
    let results = [];

    if(JsonData && JsonData.products) {
      const input = this.state.searchInput.toLowerCase();
      
      if(this.state.searchInput) {
        let exactResults = [];
        let inResults = [];

        for(let product of JsonData.products) {
          const pName = product.name.toLowerCase();
          
          if(pName.startsWith(input)) {
            exactResults.push(product);
          }
          else if(pName.includes(input)) {
            inResults.push(product);
          }
        }
        results = exactResults.concat(inResults);
      }

      this.setState({
        searchResults: results
      });
    }
  }
}

export default ProductSearchApp;
