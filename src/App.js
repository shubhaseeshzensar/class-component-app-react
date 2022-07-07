import "./App.css";
import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    // console.log("constructor called");
    super();
    this.state = {
      users: [],
      searchField: "",
    };
  }
  //OR
  // state = {
  //   users: [],
  // };

  //state = {
  // users: [],
  //};

  // nameChangeHandler = () => {
  //   this.setState({    });
  //   console.log(this.state);
  // };
  componentDidMount() {
    // console.log("Component DidMount function");
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((users) =>
        this.setState(
          () => {
            return { users };
          },
          // () => {
          //   console.log(
          //     `Now the current state is ${JSON.stringify(this.state)}`
          //   );
          // }
        )
      );
      // console.log(response)
    });
  }
  searchUserHandler = (event) => {
    console.log({ startingArray: this.state.users });
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // console.log("render function");
    // const{users, searchField} = this.state;
    // const{searchUserHandler} = this;
    const filteredUsers = this.state.users.filter((user) => {
      return user.name.toLocaleLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <h3>This is a class Component</h3>

        <SearchBox
          onSearchUserHandler={this.searchUserHandler}
          placeholder="Search Users"
        />

        {/* <button onClick={this.nameChangeHandler}>Change Name</button> */}
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
