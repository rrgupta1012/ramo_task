import React, { Component} from 'react';
import {BrowserRouter,Route , Switch, NavLink} from "react-router-dom";

import Menu from './menu';

class CreateIncident extends Component {

  // state = {
  //   full_users_info: {first_name: '', last_name: '', email_id:'', mobile_number:'',street:'',country:'',state:'',city:''},
  //   re_data:'',
  //   user_image:'',
  //   active:false,
  //   first_name_error:'',
  //   last_name_error:'',
  //   email_id_error:'',
  //   mobile_number_error:'',
  //   street_error:'',
  // }


  handleSubmit = event => {
    event.preventDefault()
    console.log('this is handle submit')
  //   let form_data = new FormData();
  //   if (this.state.user_image){
  //     form_data.append('photo', this.state.user_image, this.state.user_image.name);
  //   }
  //   form_data.append('first_name', this.state.full_users_info.first_name);
  //   form_data.append('last_name', this.state.full_users_info.last_name);
  //   form_data.append('email_id', this.state.full_users_info.email_id);
  //   form_data.append('mobile_number', this.state.full_users_info.mobile_number);
  //   form_data.append('street', this.state.full_users_info.street);
  //   form_data.append('country', this.state.full_users_info.country);
  //   form_data.append('state', this.state.full_users_info.state);
  //   form_data.append('city', this.state.full_users_info.city);
  //   form_data.append('active', this.state.active);
  //   fetch('http://127.0.0.1:8000/user_info/create/', {
  //     method: 'POST',
  //     headers: {
  //               // 'Content-Type': 'application/json',
  //               // 'content-type': 'multipart/form-data'
  //             },
  //     // body: JSON.stringify(this.state.full_users_info)
  //     body: form_data
  //   })
  //   .then( data => data.json())
  //   .then(
  //     data => {
  //       console.log('dataaaaaa',data)
  //       this.state.re_data = data
  //     }
  //   )
  //   .then(
  //    redirecting => {
  //      console.log('shhaskksasasaas')
  //       this.props.history.push({
  //                                pathname : "/dashboard",
  //                           });
  //     }
  //   )
  //   .catch( error => console.error(error))  
  }



  inputChanged = event => {
    // const form_info = this.state.full_users_info;
    // form_info[event.target.name] = event.target.value;
    // console.log('form_info',form_info)
    // this.setState({full_users_info: form_info,
    //                 first_name_error:'',
    //                 last_name_error:'',
    //                 email_id_error:'',
    //                 mobile_number_error:'',
    //                 street_error:'',});
    console.log('input changed')
  }

  inputcheckboxChanged = event => {
    console.log('check box hit')

    // if (this.state.active){
    //   this.setState({
    //     active: false
    //   })
    // }
    // else{
    //   this.setState({
    //     active: true
    //   })
    // }
  }

  handleImageChange = (e) => {
    // this.setState({
    //   user_image: e.target.files[0]
    // })
    console.log('image change')
  };
  
  componentDidMount() {
    // if(!localStorage.getItem('local_token')){
    //   this.props.history.push({
    //           pathname : "/",
    //         });
    // }
    console.log('this cdm')
  }

  render() {
    return (
      <div className="mt-2">
        <div className="text-center text-white bg-dark"><p><b>Create Incident</b></p></div>
          <div className="row ml-0 mr-0">
            <div className="col-12 col-md-4 text-center">
              {/* <p>New</p> */}
              <p><span> Incident Number : </span>CAT-202002140001</p>
            </div>
            <div className="col-12 col-md-4 text-center">
              <p className="mb-0">Incident Reporting Date</p>
              <p>14-02-2020</p>
            </div>
            <div className="col-12 col-md-4 text-center">
              <p className="mb-0">Incident Reporting  Time</p>
              <p>00:50:18</p>
            </div>
          </div>
          <div className="border">
            <div className="row ml-0 mr-0">
              <div className="col-12 text-center"><p><b>Reporting Party Details</b></p></div>
              <div className="col-6 col-md-3 text-center">
                <p className="mb-0">Organization Name</p>
                <p>ABC Pvt Ltd.</p>
              </div>
              <div className="col-6 col-md-3 text-center">
                <p className="mb-0">Company Website</p>
                <p>www.abcpvt.com</p>
              </div>
              <div className="col-6 col-md-3 text-center">
                <p className="mb-0">Contact Person Name</p>
                <p>Ravi Gupta</p>
              </div>
              <div className="col-6 col-md-3 text-center">
                <p className="mb-0">Sector</p>
                <p>E-Commerce</p>
              </div>
            </div>
          </div>

          <div className="text-white text-center bg-secondary"><p><b>Incident Details</b></p></div>
            <div className="row">
                          <div className="col-12">
                              <form onSubmit={this.handleSubmit} >
                                <div className="row ml-0 mr-0">
                                <div className="col-12 col-md-3">
                                     <div className="form-group">
                                        <label>State</label>
                                        <select className="form-control" name='state'>
                                          <option></option>
                                          <option value="phishisng">Phishisng</option>
                                          <option value="malware">Malware</option>
                                          <option value="scanning">Scanning</option>
                                          <option value="spamming">Spamming</option>
                                          <option value="intrusions_defacement">Intrusions/Defacement</option>
                                          <option value="availability">Availability</option>
                                          <option value="it_act">IT-ACT</option>
                                          <option value="others">Others</option>
                                        </select>
                                      </div>
                                  </div>

                                  <div className="col-12 col-md-3">
                                     <div className="form-group">
                                        <label>First Name</label>
                                        {/* <input type="text" name='first_name' className="form-control" value={this.state.full_users_info.first_name} onChange={this.inputChanged} required/>
                                        <b style={{color:'red'}} > {this.state.first_name_error} </b> */}
                                        <input type="text" name='first_name' className="form-control"required/>
                                      </div>
                                    </div>
                                      {/* <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" name='last_name' className="form-control" value={this.state.full_users_info.last_name} onChange={this.inputChanged} />
                                        <b style={{color:'red'}} > {this.state.last_name_error} </b>
                                      </div> */}
                                      {/* <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name='email_id' className="form-control" value={this.state.full_users_info.email_id} onChange={this.inputChanged} required/>
                                        <b style={{color:'red'}} > {this.state.email_id_error} </b>
                                      </div> */}
                                      {/* <div className="form-group">
                                        <label>Mobile Number</label>
                                        <input type="text" name='mobile_number' className="form-control" value={this.state.full_users_info.mobile_number} onChange={this.inputChanged} required/>
                                        <b style={{color:'red'}} > {this.state.mobile_number_error} </b>
                                      </div> */}

                                      {/* <div className="form-group">
                                        <label>Address</label>
                                        <label>Street</label>
                                        <input type="text" name='street' className="form-control" value={this.state.full_users_info.street} onChange={this.inputChanged} />
                                        <b style={{color:'red'}} > {this.state.street_error} </b>
                                      </div> */}
                                      {/* <div className="form-group">
                                        <label>Country</label>
                                        <select className="form-control" name='country' value={this.state.full_users_info.country} onChange={this.inputChanged}>
                                          <option></option>
                                          <option value="IN">India</option>
                                        </select>
                                      </div> */}
                                      {/* <div className="form-group">
                                        <label>State</label>
                                        <select className="form-control" name='state' value={this.state.full_users_info.state} onChange={this.inputChanged}>
                                          <option></option>
                                          <option value="DL">Delhi</option>
                                        </select>
                                      </div> */}
                                      {/* <div className="form-group">
                                        <label>City</label>
                                        <select className="form-control" name='city' value={this.state.full_users_info.city} onChange={this.inputChanged}>
                                          <option></option>
                                          <option value="DL">Delhi</option>
                                        </select>
                                      </div> */}
                                      {/* <label>Upload Image</label>
                                      <input type="file" id="image" accept="image/png, image/jpeg" onChange={this.handleImageChange} /> */}
                                      
                                      {/* <div className="checkbox">
                                        <label><input type="checkbox" name='active'  onChange={this.inputcheckboxChanged}/> Active </label>
                                      </div> */}
                                    <div className="col-12 text-center">
                                      <button type="submit" className="btn btn-primary">Submit</button>
                                      <button className="btn ml-2 btn-primary"><NavLink to={{pathname: '/dashboard'}} style={{color:'black'}} >cancel</NavLink></button>
                                    </div>
                                </div>
                              </form>
                          </div>
                      </div> 
      </div>
    );
  }
}

export default CreateIncident;

