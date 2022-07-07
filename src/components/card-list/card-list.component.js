import React, { Component } from "react";
import Image from "../../assets/images/img1442.jpg";
class CardList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {/* <div className="card-header">User's List</div> */}

        {users.map((user) => (
          <div key={user.id} className="container">
            <div className="row mt-3">
              <div className="card col-4">
                <img
                  // src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                  src={Image}
                  alt={user.name}
                  height="100"
                  width="100"
                />
              </div>
              <div className="card col-4">
                <h3>{user.email}</h3>
              </div>
              <div className="card col-4">
                <p>{user.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
