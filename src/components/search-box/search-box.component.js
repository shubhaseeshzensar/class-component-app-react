import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      // <div class="input-group">
      //   <div class="form-outline">
      //     <input id="search-focus" type="search" id="form1" class="form-control" />
      //     <label class="form-label" for="form1">Search</label>
      //   </div>
      //   <button type="button" class="btn btn-primary">
      //     <i class="fas fa-search"></i>
      //   </button>
      // </div>
      <div className="container">
        <div className="form-outline mb-4">
          <input
            className="form-control"
            type="search"
            placeholder={this.props.placeholder}
            onChange={this.props.onSearchUserHandler}
          />
        </div>
      </div>
    );
  }
}

export default SearchBox;
