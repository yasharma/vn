import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
// import FormField from "../Common/FormField";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required} from '../../lib/Validate';
import './Register.css';

class RegisterForm extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	}
    }
    FormField(props) {
    	const {meta, input, type, label, placeholder} = props;
    	return (
			<FormGroup>
	          	<Label for={label}>{label}</Label>
	          	<Input {...input} placeholder={placeholder || label} type={type} valid={!meta.touched ? null : (meta.error ? false: null)} />
	        </FormGroup>
    	)
    }
  	render() {
  		const { error, handleSubmit, pristine, submitting, submitSucceeded} = this.props;
    	return (
     		<div className="App">
        		<div className="light-bg padding-50">
                    <div className="container">
                      	<div className="row justify-content-center">
                      		<Form onSubmit={handleSubmit(this.formSubmit)} className="col-sm-6">
                      			<Alert color="success">
                  			        This is a success alert — check it out!
                  			      </Alert>
                      			<FormGroup>
              			          	<Label htmlfor="exampleEmail">Email</Label>
              			          	<Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              			        </FormGroup>
              			        <Field 
              			        	component={this.FormField} type="text"
              			        	name="customer_name" label="Customer Name"
              			        	placeholder="Customer Name" theme="custom" validate={Required}/>
                        		<div className="form-group">
                            		<label className="d-block" htmlfor="exampleInputEmail1">Contact Name*
                                		<span className="float-right d-inline-block">All fields mark as * are mandatory</span>
                            		</label>
                            		<input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter name" />
                        		</div>
                        		<div className="form-group">
                            		<label htmlfor="exampleInputPassword1">Contact Title*</label>
                            		<input type="password" className="form-control" placeholder="Enter title" />
                        		</div>
                        		<div className="form-group">
                            		<label htmlfor="exampleInputPassword1">Email Address*</label>
                            		<input type="password" className="form-control" placeholder="Enter email address" />
                        		</div>
                        		<div className="form-row">
                            		<div className="form-group col-md-6">
                                		<label htmlfor="inputEmail4">Contact Telephone Number*</label>
                                		<div className="input-group">
                                    		<span className="input-group-addon" id="basic-addon1">+91</span>
                                    		<input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                                		</div>
                            		</div>
                            		<div className="form-group col-md-6">
                                		<label htmlfor="inputPassword4">School Telephone Number</label>
                                		<div className="input-group">
                                    		<span className="input-group-addon" id="basic-addon1">+91</span>
                                    		<input type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
                                		</div>
                            		</div>
                        		</div>
		                        <div className="form-group">
		                            <label htmlfor="exampleInputPassword1">School Name*</label>
		                            <input type="password" className="form-control" placeholder="Enter school name" />
		                        </div>
		                        <div className="form-group">
		                            <label htmlfor="exampleInputPassword1">School Address*</label>
		                            <input type="password" className="form-control" placeholder="Enter school address" />
		                        </div>
		                        <div className="form-row">
		                            <div className="form-group col-md-4">
		                                <label htmlfor="inputEmail4">Total No. of Students</label>
		                                <input type="text" className="form-control" placeholder="0" />
		                            </div>
		                            <div className="form-group col-md-4">
		                                <label htmlfor="inputPassword4">Type of School</label>
		                                <select className="form-control">
		                                    <option>Select type</option>
		                                    <option>Select type</option>
		                                    <option>Select type</option>
		                                </select>
		                            </div>
		                            <div className="form-group col-md-4">
		                                <label htmlfor="inputPassword5">School Levels</label>
		                                <select className="form-control">
		                                    <option>Select levels</option>
		                                    <option>Select levels</option>
		                                    <option>Select levels</option>
		                                </select>
		                            </div>
		                        </div>
		                        <div className="form-group">
		                            <label htmlfor="exampleInputPassword1">Why do you want your school to be a part of the pilot program?</label>
		                            <input type="text" className="form-control" placeholder="Select class" />
		                        </div>
		                        <div className="form-group">
		                            <label htmlfor="exampleInputPassword1">Does your school have student laptops, and if so how many?</label>
		                            <input type="text" className="form-control" placeholder="0" />
		                        </div>
                        		<div className="sm-heading">What are your school's challenges as they relate to:</div>
		                        <div className="form-group">
		                            <label htmlfor="exampleInputPassword1">Online lesson planning?</label>
		                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
		                        </div>
		                        <div className="form-group">
		                            <label htmlfor="exampleInputPassword1">Teacher grade book?</label>
		                            <textarea className="form-control" rows="3"></textarea>
		                        </div>
		                        <div className="form-group">
		                            <label htmlfor="exampleInputPassword1">Student's classwork?</label>
		                            <textarea className="form-control" rows="3"></textarea>
		                        </div>
		                        <div className="sm-heading">What are your school's goals as they relate to:</div>
		                        <div className="form-group">
		                            <label htmlfor="exampleInputPassword1">Online lesson planning?</label>
		                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
		                        </div>
		                        <div className="form-group">
		                            <label htmlfor="exampleInputPassword1">Teacher grade book?</label>
		                            <textarea className="form-control" rows="3"></textarea>
		                        </div>
		                        <div className="form-group">
		                            <label htmlfor="exampleInputPassword1">Student's classwork?</label>
		                            <textarea className="form-control" rows="3"></textarea>
		                        </div>
		                        <button type="submit" className="btn btn-block btn-primary">Submit</button>
                      		</Form>
                      	</div>
                    </div>
                </div>
      		</div>
    	);
  	}
  	formSubmit(values) {
  		console.log(values);
  	}
}


const _RegisterForm = reduxForm({
  	form: 'signupForm'
})(RegisterForm);

export default _RegisterForm;