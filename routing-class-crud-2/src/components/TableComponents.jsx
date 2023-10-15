import React, { Component, Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";

class TableComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: JSON.parse(localStorage.getItem('array')) || [],
      count: JSON.parse(localStorage.getItem('count')) || 0,
      obj: {
        hobbies: []
      },
      blankObj: { fname: "", lname: "", email: "", gender: "", hobbies: [], },
    };
  }

  deleteUser = (id) => {
    let index = this.state.array.findIndex((x) => x.id == id)
    console.log(index)
    this.state.array.splice(index, 1)
    this.setState({array : [...this.state.array]})
    localStorage.setItem('array', JSON.stringify(this.state.array))
  }
 


  render() {
    return (
      <Fragment>

        <div className="text-center fw-bold fs-5 p-3">TableComponent</div>

        <table className="table mt-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Profile</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Hobby</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.state.array.map((x, i) => {
              return (
                <tr key={i}>
                  <td>{x.id}</td>
                  <td>
                    <img src={x.profile} alt="" width={40} height={40} />
                  </td>
                  <td>{x.fname}</td>
                  <td>{x.lname}</td>
                  <td>{x.email}</td>
                  <td>{x.gender}</td>
                  <td>{x.hobbies?.join(",")}</td>
                  <td>
                   <Link to = {'/form/' + x.id}><button
                      className="btn btn-success"
                      onClick={() => this.editUser(x.id)}
                    > EDIT</button></Link>
                      
                   
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => this.deleteUser(x.id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
export default Sidebar(TableComponents);
