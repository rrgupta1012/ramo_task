import React, { Component} from 'react';
import {BrowserRouter,Route , Switch, NavLink} from "react-router-dom";

import Menu from './menu';

class CreateIncident extends Component {

  state = {
    incident_category:null,
    person_reporting_name: '',
    email_id:'', 
    mobile:'',
    country:'',
    state:'',
    sector:'',
    country:'',
    mobile:'',
    detail_obtain_tool_1:'',
    detail_obtain_tool_2:'',
    detail_obtain_tool_3:'',
    detail_obtain_tool_4:'',
    detail_obtain_tool_5:'',
    detail_obtain_tool_6:'',
    incident_observed_date:'',
    incident_observed_time:'',
    impacted_system_critical:false,
    phone:'',
    fax:'',
    incident_details:'',
    domain_url:'',
    ip_address:'',
    different_person_reporting_name:'',
    different_email:'',
    different_country:'',
    different_state:'',
    different_sector:'',
    oragnaization_impacted:'',
    impacted_system_user:'',
    no_user_impacted:'',
    phishing_screenshot:'',
    phishing_source_code_snippet:'',
    hosting_type:'',
    phishing_email_content:'',
    no_systems_impacted:'',
    operating_system:'',
    md5:'',
    evidence_forensic_images:'',
    malicious_email_content:'',
    evidence_malicious_email_attachments:'',
    isp_name:'',
  }


  handleSubmit = event => {
    event.preventDefault()
    console.log('this is handle submit',this.state)
    let form_data = new FormData();
    // if (this.state.user_image){
    //   form_data.append('photo', this.state.user_image, this.state.user_image.name);
    // }
    form_data.append('incident_category', this.state.incident_category);
    form_data.append('person_reporting_name', this.state.person_reporting_name);
    // form_data.append('last_name', this.state.full_users_info.last_name);
    // form_data.append('email_id', this.state.full_users_info.email_id);
    // form_data.append('mobile_number', this.state.full_users_info.mobile_number);
    // form_data.append('street', this.state.full_users_info.street);
    // form_data.append('country', this.state.full_users_info.country);
    // form_data.append('state', this.state.full_users_info.state);
    // form_data.append('city', this.state.full_users_info.city);
    // form_data.append('active', this.state.active);
    fetch('http://127.0.0.1:8000/incidents/', {
      method: 'POST',
      headers: {
                // 'Content-Type': 'application/json',
                // 'content-type': 'multipart/form-data'
              },
      // body: JSON.stringify(this.state.full_users_info)
      body: form_data
    })
    .then( data => data.json())
    .then(
      data => {
        console.log('dataaaaaa',data)
        // this.state.re_data = data
      }
    )
    .then(
     redirecting => {
       console.log('shhaskksasasaas')
        // this.props.history.push({
        //                          pathname : "/dashboard",
        //                     });
      }
    )
    .catch( error => console.error(error))  
  }

  incident_categoryChanged = event => {
    this.setState({incident_category: event.target.value});
  }

  email_idChanged = event => {
    this.setState({email_id: event.target.value});
  }

  sectorChanged = event => {
    this.setState({sector: event.target.value});
  }

  countryChanged = event => {
    this.setState({country: event.target.value});
  }

  stateChanged = event => {
    this.setState({state: event.target.value});
  }

  mobileChanged = event => {
    this.setState({mobile: event.target.value});
  }

  detail_obtain_tool_1Changed = event => {
    this.setState({detail_obtain_tool_1: event.target.value});
  }

  detail_obtain_tool_2Changed = event => {
    this.setState({detail_obtain_tool_2: event.target.value});
  }

  detail_obtain_tool_3Changed = event => {
    this.setState({detail_obtain_tool_3: event.target.value});
  }

  detail_obtain_tool_4Changed = event => {
    this.setState({detail_obtain_tool_4: event.target.value});
  }

  detail_obtain_tool_5Changed = event => {
    this.setState({detail_obtain_tool_5: event.target.value});
  }

  detail_obtain_tool_6Changed = event => {
    this.setState({detail_obtain_tool_6: event.target.value});
  }

  incident_observed_dateChanged = event => {
    this.setState({incident_observed_date: event.target.value});
  }

  incident_observed_timeChanged = event => {
    this.setState({incident_observed_time: event.target.value});
  }

  impacted_system_criticalChanged = event => {
    this.setState({impacted_system_critical: event.target.value});
    // if (this.state.impacted_system_critical){
    //   this.setState({
    //     impacted_system_critical: false
    //   })
    // }
    // else{
    //   this.setState({
    //     impacted_system_critical: true
    //   })
    // }
  }

  phoneChanged = event => {
    this.setState({phone: event.target.value});
  }

  faxChanged = event => {
    this.setState({fax: event.target.value});
  }

  incident_detailsChanged = event => {
    this.setState({incident_details: event.target.value});
  }

  domain_urlChanged = event => {
    this.setState({domain_url: event.target.value});
  }

  ip_addressChanged = event => {
    this.setState({ip_address: event.target.value});
  }

  different_person_reporting_nameChanged = event => {
    this.setState({different_person_reporting_name: event.target.value});
  }

  different_emailChanged = event => {
    this.setState({different_email: event.target.value});
  }

  different_countryChanged = event => {
    this.setState({different_country: event.target.value});
  }

  different_stateChanged = event => {
    this.setState({different_state: event.target.value});
  }

  different_sectorChanged = event => {
    this.setState({different_sector: event.target.value});
  }

  oragnaization_impactedChanged = event => {
    this.setState({oragnaization_impacted: event.target.value});
  }

  impacted_system_userChanged = event => {
    this.setState({impacted_system_user: event.target.value});
    // if (this.state.impacted_system_user){
    //   this.setState({
    //     impacted_system_user: false
    //   })
    // }
    // else{
    //   this.setState({
    //     impacted_system_user: true
    //   })
    // }
  }

  no_user_impactedChanged = event => {
    this.setState({no_user_impacted: event.target.value});
  }

  phishing_screenshotChanged = event => {
    this.setState({phishing_screenshot: event.target.files[0]});
  }

  phishing_source_code_snippetChanged = event => {
    this.setState({phishing_source_code_snippet: event.target.value});
  }

  hosting_typeChanged = event => {
    this.setState({hosting_type: event.target.value});
  }

  phishing_email_contentChanged = event => {
    this.setState({phishing_email_content: event.target.value});
  }
  
  no_systems_impactedChanged = event => {
    this.setState({no_systems_impacted: event.target.value});
  }

  operating_systemChanged = event => {
    this.setState({operating_system: event.target.value});
  }

  md5Changed = event => {
    this.setState({md5: event.target.value});
  }

  evidence_forensic_imagesChanged = event => {
    this.setState({evidence_forensic_images: event.target.files[0]});
  }

  malicious_email_contentChanged = event => {
    this.setState({malicious_email_content: event.target.value});
  }

  evidence_malicious_email_attachmentsChanged = event => {
    this.setState({evidence_malicious_email_attachments: event.target.value});
  }

  isp_nameChanged = event => {
    this.setState({isp_name: event.target.value});
  }

  componentDidMount() {
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
            <div className="row ml-0 mr-0 mb-3">
                          <div className="col-12">
                              <form onSubmit={this.handleSubmit} >
                                <div className="row ml-0 mr-0">

                                  <div className="col-12 col-md-3">
                                      <div className="form-group">
                                          <label>Category</label>
                                          <select className="form-control" name='incident_category' onChange={this.incident_categoryChanged}>
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

                                    <div className="col-12 col-md-9"> 
                                    </div>

                                  <div className="col-12 col-md-3">
                                     <div className="form-group">
                                        <label>Person Reporting Name</label>
                                        <input type="text" name='person_reporting_name' className="form-control" onChange={this.person_reporting_nameChanged} required/>
                                      </div>
                                    </div>
                                    <div className="col-12 col-md-3">
                                      <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name='email_id' className="form-control" onChange={this.email_idChanged} required/>
                                      </div>
                                    </div>


                                  

                                <div className="col-12 col-md-3">
                                  <div className="form-group">
                                        <label>Country</label>
                                        <select className="form-control"  name='country' onChange={this.countryChanged}>
                                          <option value="IN">India</option>
                                        </select>
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">
                                  <div className="form-group">
                                    <label>State</label>
                                    <select className="form-control" name='state' onChange={this.stateChanged}>
                                      <option value="DL">Delhi</option>
                                      <option value="UP">Utter Pradesh</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">
                                      <div className="form-group">
                                        <label>Sector</label>
                                        <input type="text" name='sector' className="form-control" onChange={this.sectorChanged} required/>
                                      </div>
                                </div>
                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Mobile Number</label>
                                          <input type="text" name='mobile' className="form-control" onChange={this.mobileChanged} required/>
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Fax</label>
                                          <input type="text" name='fax' className="form-control" onChange={this.faxChanged} required/>
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Phone</label>
                                          <input type="text" name='phone' className="form-control" onChange={this.phoneChanged} required/>
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>IP Address</label>
                                          {/* <input type="text" name='mobile_number' className="form-control" value={this.state.full_users_info.mobile_number} onChange={this.inputChanged} required/> */}
                                          <input type="text" name='ip_address' className="form-control" onChange={this.ip_addressChanged} required/>
                                          {/* <b style={{color:'red'}} > {this.state.mobile_number_error} </b> */}
                                  </div>
                                </div>


                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Domain Url</label>
                                          {/* <input type="text" name='mobile_number' className="form-control" value={this.state.full_users_info.mobile_number} onChange={this.inputChanged} required/> */}
                                          <input type="text" name='domain_url' className="form-control" onChange={this.domain_urlChanged} required/>
                                          {/* <b style={{color:'red'}} > {this.state.mobile_number_error} </b> */}
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Observations/incident details</label>
                                          {/* <input type="text" name='mobile_number' className="form-control" value={this.state.full_users_info.mobile_number} onChange={this.inputChanged} required/> */}
                                          <input type="text" name='incident_details' className="form-control" onChange={this.incident_detailsChanged} required/>
                                          {/* <b style={{color:'red'}} > {this.state.mobile_number_error} </b> */}
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Incident Observed Date</label>
                                          {/* <input type="text" name='mobile_number' className="form-control" value={this.state.full_users_info.mobile_number} onChange={this.inputChanged} required/> */}
                                          <input type="date" name='incident_observed_date' className="form-control" onChange={this.incident_observed_timeChanged} required/>
                                          {/* <b style={{color:'red'}} > {this.state.mobile_number_error} </b> */}
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Incident Observed Time</label>
                                          {/* <input type="text" name='mobile_number' className="form-control" value={this.state.full_users_info.mobile_number} onChange={this.inputChanged} required/> */}
                                          <input type="time" name='incident_observed_time' className="form-control" onChange={this.incident_categoryChanged} required/>
                                          {/* <b style={{color:'red'}} > {this.state.mobile_number_error} </b> */}
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                      <div className="checkbox">
                                        <label><span className="mr-1">Impacted System Critical </span> <input type="checkbox" name='impacted_system_critical' onChange={this.impacted_system_criticalChanged}/> </label>
                                      </div>
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">       
                                  <div className="form-group">
                                      <div className="checkbox">
                                        <label><span className="mr-1">Impacted User Critical </span> <input type="checkbox" name='impacted_system_user' onChange={this.impacted_system_userChanged}/> </label>
                                      </div>
                                  </div>
                                </div>





                                <div className="col-12">
                                </div>

                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Person Reporting Name(If Different)</label>
                                          {/* <input type="text" name='mobile_number' className="form-control" value={this.state.full_users_info.mobile_number} onChange={this.inputChanged} required/> */}
                                          <input type="text" name='different_person_reporting_name' className="form-control" onChange={this.different_person_reporting_nameChanged} required/>
                                          {/* <b style={{color:'red'}} > {this.state.mobile_number_error} </b> */}
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Email(If Different)</label>
                                          {/* <input type="text" name='mobile_number' className="form-control" value={this.state.full_users_info.mobile_number} onChange={this.inputChanged} required/> */}
                                          <input type="text" name='different_email' className="form-control" onChange={this.different_emailChanged} required/>
                                          {/* <b style={{color:'red'}} > {this.state.mobile_number_error} </b> */}
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Oragnaization Impacted(if different)</label>
                                          {/* <input type="text" name='mobile_number' className="form-control" value={this.state.full_users_info.mobile_number} onChange={this.inputChanged} required/> */}
                                          <input type="text" name='oragnaization_impacted' className="form-control" onChange={this.oragnaization_impactedChanged} required/>
                                          {/* <b style={{color:'red'}} > {this.state.mobile_number_error} </b> */}
                                  </div>
                                </div>


                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Sector(If Different):</label>
                                          {/* <input type="text" name='mobile_number' className="form-control" value={this.state.full_users_info.mobile_number} onChange={this.inputChanged} required/> */}
                                          <input type="text" name='different_sector' className="form-control" onChange={this.different_sectorChanged} required/>
                                          {/* <b style={{color:'red'}} > {this.state.mobile_number_error} </b> */}
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">
                                  <div className="form-group">
                                        <label>Country(If Different)</label>
                                        <select className="form-control" name='different_country' onChange={this.different_countryChanged}>
                                          {/* <option></option> */}
                                          <option value="IN">India</option>
                                        </select>
                                  </div>
                                </div>

                                <div className="col-12 col-md-3">
                                  <div className="form-group">
                                    <label>State(If Different)</label>
                                    <select className="form-control" name='different_state' onChange={this.different_stateChanged}>
                                      {/* <option></option> */}
                                      <option value="DL">Delhi</option>
                                      <option value="UP">Utter Pradesh</option>
                                    </select>
                                  </div>
                                </div>

                        
                                <div className="col-12">
                                </div>


                                        {
                                               this.state.incident_category == 'phishisng' ?    <div className="col-12 col-md-3">        
                                              <div className="form-group">
                                                      <label>No Of User Impacted</label>
                                                      {/* <input type="text" name='mobile_number' className="form-control" value={this.state.full_users_info.mobile_number} onChange={this.inputChanged} required/> */}
                                                      <input type="number" name='no_user_impacted' className="form-control" onChange={this.no_user_impactedChanged} required/>
                                                      {/* <b style={{color:'red'}} > {this.state.mobile_number_error} </b> */}
                                              </div>
                                            </div>

                                            :
                                            <></>
                                        }
                             
                             {
                                this.state.incident_category == 'phishisng' ? 
                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                      <label>Phishing Screenshot</label>
                                      <input type="file" id="image" name="phishing_screenshot" accept="image/png, image/jpeg" onChange={this.phishing_screenshotChanged}/>
                                  </div>
                                </div>
                                  :
                                  <></>
                              }

                                {/* <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Hosting Type</label>
                                          <input type="text" name='hosting_type' className="form-control" required/>
                                  </div>
                                </div> */}
                              {
                                this.state.incident_category == 'phishisng' ? 
                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Phishing Email Content: (Paste)</label>
                                          <input type="text" name='phishing_email_content' className="form-control" onChange={this.phishing_email_contentChanged} required/>
                                  </div>
                                </div>
                                 :
                                 <></>
                              }

                              {
                                this.state.incident_category == 'phishisng' ? 
                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>No of Systems impacted</label>
                                          <input type="number" name='no_systems_impacted' className="form-control" onChange={this.no_systems_impactedChanged} required/>
                                  </div>
                                </div>
                                :
                                <></>
                              }

                                {/* <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Operating System</label>
                                          <input type="text" name='operating_system' className="form-control" required/>
                                  </div>
                                </div> */}


                                <div className="col-12">
                                </div>
                              {
                                this.state.incident_category == 'malware' ? 
                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>MD5</label>
                                          <input type="text" name='md5' className="form-control" onChange={this.md5Changed} required/>
                                  </div>
                                </div>
                                :
                                <></>
                              }

                              {
                                this.state.incident_category == 'malware' ? 
                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Malicious Email Content</label>
                                          <input type="text" name='malicious_email_content' className="form-control" onChange={this.malicious_email_contentChanged} required/>
                                  </div>
                                </div>
                                :
                                <></>
                              }


                              {
                                this.state.incident_category == 'malware' ?
                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>Malicious Email attachments</label>
                                          <input type="text" name='evidence_malicious_email_attachments' className="form-control" onChange={this.evidence_malicious_email_attachmentsChanged} required/>
                                  </div>
                                </div>
                                :
                                <></>
                              }

                              {
                                this.state.incident_category == 'malware' ?

                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                      <label>Evidence forensic images</label>
                                      <input type="file" id="evidence_forensic_images" name="evidence_forensic_images" accept="image/png, image/jpeg" onChange={this.evidence_forensic_imagesChanged}/>
                                  </div>
                                </div>
                                :
                                <></>
                              }


                                <div className="col-12">
                                </div>
                                
                                {
                                this.state.incident_category == 'scanning' ||  this.state.incident_category == 'spamming' ?
                                <div className="col-12 col-md-3">        
                                  <div className="form-group">
                                          <label>ISP Name</label>
                                          <input type="text" name='isp_name' className="form-control" onChange={this.isp_nameChanged} required/>
                                  </div>
                                </div>
                                :
                                <></>
                              }




                                <div className="col-12">
                                </div>

                                <div className="col-12 col-md-4">        
                                  <div className="form-group">
                                          <label>Details Obtained from Tool 1</label>
                                          <input type="text" name='detail_obtain_tool_1' className="form-control" onChange={this.detail_obtain_tool_1Changed} required/>
                                  </div>
                                </div>
                                <div className="col-12 col-md-4">        
                                  <div className="form-group">
                                          <label>Details Obtained from Tool 2</label>
                                          <input type="text" name='detail_obtain_tool_2' className="form-control" onChange={this.detail_obtain_tool_2Changed} required/>
                                  </div>
                                </div>
                                <div className="col-12 col-md-4">        
                                  <div className="form-group">
                                          <label>Details Obtained from Tool 3</label>
                                          <input type="text" name='detail_obtain_tool_3' className="form-control" onChange={this.detail_obtain_tool_3Changed} required/>
                                  </div>
                                </div>
                                <div className="col-12 col-md-4">        
                                  <div className="form-group">
                                          <label>Details Obtained from Tool 4</label>
                                          <input type="text" name='detail_obtain_tool_4' className="form-control" onChange={this.detail_obtain_tool_4Changed} required/>
                                  </div>
                                </div>
                                <div className="col-12 col-md-4">        
                                  <div className="form-group">
                                          <label>Details Obtained from Tool 5</label>
                                          <input type="text" name='detail_obtain_tool_5' className="form-control" onChange={this.detail_obtain_tool_5Changed} required/>
                                  </div>
                                </div>
                                <div className="col-12 col-md-4">        
                                  <div className="form-group">
                                          <label>Details Obtained from Tool 6</label>
                                          <input type="text" name='detail_obtain_tool_6' className="form-control" onChange={this.detail_obtain_tool_6Changed} required/>
                                  </div>
                                </div>


                                
                                 

                                    <div className="col-12 text-center">
                                      <button type="submit" className="btn btn-primary">Submit</button>
                                      {/* <button className="btn ml-2 btn-primary"><NavLink to={{pathname: '/dashboard'}} style={{color:'black'}} >cancel</NavLink></button> */}
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

