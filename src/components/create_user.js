import React, { Component} from 'react';
import {BrowserRouter,Route , Switch, NavLink} from "react-router-dom";

import Menu from './menu';
// import Header from './header';

class CreateUser extends Component {

  state = {
    login_active:true,
    individual_enterprise_government:'',
    first_name:'',
    last_name:'',
    email_id:'',
    company_name:'',
    company_indivisual_adress:'',
    state:'',
    city:'',
    pincode:'',
    company_url:'',
    sector:'',
    informed_email_id:'',
    informed_email_id_cc1:'',
    informed_email_id_cc2:'',
    informed_email_id_cc3:'',
    active:false,
  }


  handleSubmit = event => {
    event.preventDefault()
    let form_data = new FormData();
    console.log('this is form submit')

    // if (this.state.user_image){
    //   form_data.append('photo', this.state.user_image, this.state.user_image.name);
    // }
    // form_data.append('first_name', this.state.full_users_info.first_name);
    // form_data.append('last_name', this.state.full_users_info.last_name);
    // form_data.append('email_id', this.state.full_users_info.email_id);
    // form_data.append('mobile_number', this.state.full_users_info.mobile_number);
    // form_data.append('street', this.state.full_users_info.street);
    // form_data.append('country', this.state.full_users_info.country);
    // form_data.append('state', this.state.full_users_info.state);
    // form_data.append('city', this.state.full_users_info.city);
    // form_data.append('active', this.state.active);
    // fetch('http://127.0.0.1:8000/user_info/create/', {
    //   method: 'POST',
    //   headers: {
    //             // 'Content-Type': 'application/json',
    //             // 'content-type': 'multipart/form-data'
    //           },
    //   // body: JSON.stringify(this.state.full_users_info)
    //   body: form_data
    // })
    // .then( data => data.json())
    // .then(
    //   data => {
    //     console.log('dataaaaaa',data)
    //     this.state.re_data = data
    //   }
    // )
    // .then(
    //  redirecting => {
    //    console.log('shhaskksasasaas')
    //     this.props.history.push({
    //                              pathname : "/dashboard",
    //                         });
    //   }
    // )
    // .catch( error => console.error(error))

    
  }



  inputChanged = event => {
    console.log('form_info')
  }

  inputcheckboxChanged = event => {

    console.log('this is check box')
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
    console.log('this is image change')
    // this.setState({
    //   user_image: e.target.files[0]
    // })
  };

  loginClick = (e) => {
    console.log('this is image change')
    this.setState({
      login_active:true
    })
  };

  signupClick = (e) => {
    console.log('this is image change')
    this.setState({
      login_active:false
    })
  };
  input_indivisul_Changed = (e) =>{
    this.setState({
      individual_enterprise_government: e.target.value
    })
    console.log('individual_enterprise_government',this.state.individual_enterprise_government)
  }
  
  componentDidMount() {
    console.log('this  is cmd')
    // if(!localStorage.getItem('local_token')){
    //   this.props.history.push({
    //           pathname : "/",
    //         });
    // }
  }

  render() {
    return (
      <div className="mt-2">
            <div className="row ml-0 mr-0">
                  {/* <div className="col-sm-1 border border-dark">
                      <Menu/>
                  </div> */}
                  <div className="col-12">
                      {/* <h5 className="text-center">Login/SignUp</h5> */}

                            <div className="row justify-content-md-center">
                                <div className="row">
                                    <div className="col-6 text-center border" onClick={this.loginClick}>
                                      <h3>Login</h3>
                                    </div>

                                    <div className="col-6 text-center border" onClick={this.signupClick}>
                                      <h3>SignUp</h3>
                                    </div>
                                </div>
                            </div>


                    {
                        this.state.login_active ? 

                        <div className="row justify-content-md-center">
                          <div className="col-12 col-md-4">
                              <form onSubmit={this.handleLoginSubmit} >
                                      <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name='email_id_login' className="form-control" value={this.state.email_id_login} onChange={this.inputChanged} required/>
                                      </div>

                                      <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name='password' className="form-control" value={this.state.password_login} onChange={this.inputChanged} required/>
                                      </div>
                                     <div className="text-center"> 
                                       <button type="submit" className="btn btn-primary">Login</button>
                                     </div>
                              </form>
                          </div>
                      </div>

                      :



                      <div className="row justify-content-md-center">
                          <div className="col-12 col-md-4">
                              <form onSubmit={this.handleSubmit} >

                                    <div className="form-group">
                                      <label>Individual/Enterprise/Government</label><br/>
                                      <input type="radio" id="indivisual" name="user_type"  value="indivisual" onChange={this.input_indivisul_Changed} required/>
                                      <label for="indivisual" className="pr-2">Indivisual</label>
                                      <input type="radio" id="Enterprise" name="user_type" value="enterprise" onChange={this.input_indivisul_Changed} required/>
                                      <label for="enterprise" className="pr-2">Enterprise</label>
                                      <input type="radio" id="government" name="user_type" value="government" onChange={this.input_indivisul_Changed} required/>
                                      <label for="government">Government</label>
                                    </div>

                                     <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" name='first_name' className="form-control" value={this.state.first_name} onChange={this.inputChanged} required/>
                                      </div>


                                      <div className="form-group">
                                        <label>Last Name</label>
                                        <input type="text" name='last_name' className="form-control" value={this.state.last_name} onChange={this.inputChanged} />
                                      </div>


                                      <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name='email_id' className="form-control" value={this.state.email_id} onChange={this.inputChanged} required/>
                                      </div>
                                      

                                      <div className="form-group">
                                        <label>Company/Indivisual Address</label>
                                        <input type="text" name='street' className="form-control" value={this.state.street} onChange={this.inputChanged} />
                                      </div>
                                     

                                      <div className="form-group">
                                        <label>State</label>
                                        <select className="form-control" name='state' value={this.state.state} onChange={this.inputChanged}>
                                          <option></option>
                                          <option value="DL">Delhi</option>
                                          <option value="UP">Uttar Pradesh</option>
                                        </select>
                                      </div>


                                      <div className="form-group">
                                        <label>City</label>
                                        <input type="text" name='street' className="form-control" value={this.state.city} onChange={this.inputChanged} />
                                      </div>

                                      <div className="form-group">
                                        <label>Company Name</label>
                                        <input type="text" name='company_name' className="form-control" value={this.state.company_name} onChange={this.inputChanged} />
                                      </div>

                                      <div className="form-group">
                                        <label>Company Url</label>
                                        <input type="text" name='company_url' className="form-control" value={this.state.company_url} onChange={this.inputChanged} />
                                      </div>

                                      <div className="form-group">
                                        <label>Sector</label>
                                        <input type="text" name='sector' className="form-control" value={this.state.sector} onChange={this.inputChanged} />
                                      </div>

                                      <div className="form-group">
                                        <label>Email ID of Person to be  informed TO:</label>
                                        <input type="text" name='informed_email_id' className="form-control" value={this.state.informed_email_id} onChange={this.inputChanged} />
                                      </div>

                                      <div className="form-group">
                                        <label>Email ID of Person to be  informed cc:</label>
                                        <input type="text" name='informed_email_id_cc1' className="form-control" value={this.state.informed_email_id_cc1} onChange={this.inputChanged} />
                                      </div>

                                      <div className="form-group">
                                        <label>Email ID of Person to be  informed cc2:</label>
                                        <input type="text" name='informed_email_id_cc2' className="form-control" value={this.state.informed_email_id_cc2} onChange={this.inputChanged} />
                                      </div>

                                      <div className="form-group">
                                        <label>Email ID of Person to be  informed cc3:</label>
                                        <input type="text" name='informed_email_id_cc3' className="form-control" value={this.state.informed_email_id_cc3} onChange={this.inputChanged} />
                                      </div>

                                      <div className="text-center"> 
                                         <button type="submit" className="btn btn-primary">SignUp</button>
                                      </div>
                              </form>
                          </div>
                      </div>
                    }
                  </div>
            </div>
      </div>
    );
  }
}

export default CreateUser;

