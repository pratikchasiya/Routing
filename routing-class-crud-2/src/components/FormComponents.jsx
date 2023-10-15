import React, { Component, Fragment } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";


class FormComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array:JSON.parse(localStorage.getItem('array')) ||[],
            obj: { hobbies: [] },
            blankObj: { fname: "", lname: "", email: "", gender: "", hobbies: [], },
            count : JSON.parse(localStorage.getItem('count')) || 0,
            reference: ''
        };
        // console.log(props.route.params)
    }

    componentDidMount(){
        if(this.props.route.params.id){
            let editObj = this.state.array.find(x => x.id == this.props.route.params.id)
            this.setState({obj : {...editObj}})
            console.log(editObj)
        }
    }

    getData =async (e) => {
        if (e.target.name == 'hobbies') {
            if (e.target.checked) {
                this.state.obj.hobbies?.push(e.target.value);
            }
            else {
                this.state.obj.hobbies = this.state.obj.hobbies.filter(x => x != e.target.value)
            }
            this.state.blankObj.hobbies = []
        }
        else if (e.target.name == "profile") {
            console.log(e.target.files[0]);
            this.state.obj.profile = await this.toBase64(e.target.files[0]);
          }
        else {
            this.state.obj[e.target.name] = e.target.value;
            this.state.blankObj[e.target.name] = "";
        }
        this.setState({ obj :{...this.state.obj} })
        this.setState({blankObj : {...this.state.blankObj }})
    }

    save = () => {
        if(this.state.obj.id == undefined){
            this.state.count += 1
            this.setState({count :this.state.count})
            this.state.obj.id = this.state.count
            this.state.array.push(this.state.obj)
        }
        else{
              let index = this.state.array.findIndex((x)=> x.id == this.state.obj.id)
              this.state.array.splice(index, 1 , this.state.obj)
        }
        // console.log(this.state.obj)
        this.setState({ array: [...this.state.array] })
        this.setState({ obj: {...this.state.blankObj } })
        localStorage.setItem('array', JSON.stringify(this.state.array))
        localStorage.setItem('count', JSON.stringify(this.state.count))
    }

    toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });



    render() {
        return (
            <Fragment>
                <form action="" className="w-50 mx-auto border border-1 p-4 mt-5">
                    <h3>FORM {this.state.obj.fname}</h3>
                    <label htmlFor="" className="d-block">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="fname"
                        value={this.state.obj.fname || ""}
                        className="w-100"
                        onChange={this.getData}
                    />
                    <label htmlFor="" className="d-block">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lname"
                        value={this.state.obj.lname || ''}
                        className="w-100"
                        onChange={this.getData}
                    />
                    <label htmlFor="" className="d-block">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.obj.email || ''}
                        className="w-100"
                        onChange={this.getData}
                    />
                    <label htmlFor="" className="d-block">
                        Gender
                    </label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={this.state.obj.gender == "Male"}
                        onChange={this.getData}
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="FeMale"
                        checked={this.state.obj.gender == "FeMale"}
                        onChange={this.getData}
                    />
                    Female
                    <label htmlFor="" className="d-block">
                        Hobby
                    </label>
                    <input
                        type="checkbox"
                        name="hobbies"
                        value="Cricket"
                        checked={this.state.obj.hobbies?.includes("Cricket")}
                        onChange={this.getData}
                    />
                    Cricket
                    <input
                        type="checkbox"
                        name="hobbies"
                        value="Football"
                        checked={this.state.obj.hobbies?.includes("Football")}
                        onChange={this.getData}
                    />
                    Footbal
                    <input
                        type="checkbox"
                        name="hobbies"
                        value="Music"
                        checked={this.state.obj.hobbies?.includes("Music")}
                        onChange={this.getData}
                    />
                    Music
                    <label htmlFor="" className="d-block">
                        Profile
                    </label>
                    <input
                        type="file"
                        name="profile"
                        onChange={this.getData}
                        ref={this.state.fileRef}
                    />
                    <br />
                    <button
                        type="button"
                        className="btn btn-success mt-4"
                        onClick={this.save}
                    >
                        Save
                    </button>
                </form>
            </Fragment>
        );
    }
}
export default Sidebar(FormComponents);
