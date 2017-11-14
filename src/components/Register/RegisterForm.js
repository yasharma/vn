/* global _ */
import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number} from '../../lib/Validate';
import './Register.css';

class RegisterForm extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	}
    }

  	render() {
  		const { error, handleSubmit, pristine, submitting, submitSucceeded} = this.props;
  		const options = [
			{key: 'email', value: 'Email Address'},
			{key: 'mobile', value: 'Mobile Number'}
		];
    	return (
     		<div className="App">
        		<div className="light-bg padding-50">
                    <div className="container">
                      	<div className="row justify-content-center">
                      		<Form onSubmit={handleSubmit(this.formSubmit)} className="col-sm-6">
		                        {/*<div className="form-group">
		                            <label className="d-block gradient-color" htmlFor="exampleInputEmail1">Contact Name*
		                                <span className="float-right d-inline-block mandatory-tag">All fields mark as * are mandatory</span>
		                            </label>
		                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter name" />
		                        </div>*/}
		                        <Field 
              			        	component={FormField} type="text"
              			        	name="contact_name" label="Contact Name*"
              			        	id="contactName" labelClassName="gradient-color"
              			        	placeholder="Enter contact name" validate={Required} doValidate={true}/>
              			        <Field 
              			        	component={FormField} type="text"
              			        	name="contact_title" label="Contact Title*"
              			        	id="contactTitle" labelClassName="gradient-color"
              			        	placeholder="Contact title" validate={Required} doValidate={true}/>
              			        <Field 
              			        	component={FormField} type="email"
              			        	name="email_address" label="Email Address*"
              			        	id="email" labelClassName="gradient-color"
              			        	placeholder="Enter email address" validate={[Required,Email]} doValidate={true}/>
		                        <div class="form-row">
		                        	<Field 
		                        		component={FormField} type="text" formGroupClassName="col-md-6"
		                        		name="contact_telephoneno" label="Contact Telephone Number*"
		                        		id="ContactTelephoneNumber" labelClassName="gradient-color"
		                        		placeholder="Enter email address"
		                        		doValidate={true} maskInput={true} inputAddOn={true} inputAddOnText="+1"/>
		                        	<Field 
		                        		component={FormField} type="text" formGroupClassName="col-md-6"
		                        		name="school_telephoneno" label="School Telephone Number"
		                        		id="SchoolTelephoneNumber" labelClassName="gradient-color"
		                        		placeholder="School Telephone Number"
		                        		doValidate={true} maskInput={true} inputAddOn={true} inputAddOnText="+1"/>
		                        </div>
		                        <Field 
              			        	component={FormField} type="text"
              			        	name="school_name" label="School Name*"
              			        	id="schoolName" labelClassName="gradient-color"
              			        	placeholder="Enter school name" validate={Required} doValidate={true}/>
              			        <Field 
              			        	component={FormField} type="text"
              			        	name="school_address" label="School Address*"
              			        	id="schoolAddress" labelClassName="gradient-color"
              			        	placeholder="Enter school address" validate={Required} doValidate={true}/>
		                        
		                        <div class="form-row">
		                            <Field 
		                            	component={FormField} type="text" formGroupClassName="col-md-4"
		                            	name="no_of_students" label="Total No. of Students"
		                            	id="noOfStudents" labelClassName="gradient-color"
		                            	doValidate={true} validate={Number}
		                            	placeholder="0"/>

		                            {/*<div className="form-group col-md-4">
		                                <label className="gradient-color" for="inputPassword4">Type of School</label>
		                                <select class="form-control">
		                                    <option>Select type</option>
		                                    <option>Select type</option>
		                                    <option>Select type</option>
		                                </select>
		                            </div>*/}
		                            <Field 
		                            	component={FormSelect} formGroupClassName="col-md-4"
		                            	name="type" type="select" label="Select" className="input_both" options={options}
		                            	displayKey={"key"}
		                            	displayLabel={"value"}
		                            	placeholder="Select"/>
		                            <div className="form-group col-md-4">
		                                <label className="gradient-color" for="inputPassword5">School Levels</label>
		                                <select class="form-control">
		                                    <option>Select levels</option>
		                                    <option>Select levels</option>
		                                    <option>Select levels</option>
		                                </select>
		                            </div>
		                        </div>
		                        <div className="form-group">
		                            <label className="gradient-color" for="exampleInputPassword1">Why do you want your school to be a part of the pilot program?</label>
		                            <input type="text" className="form-control" placeholder="Select class" />
		                        </div>
		                        <div className="form-group">
		                            <label className="gradient-color" for="exampleInputPassword1">Does your school have student laptops, and if so how many?</label>
		                            <input type="text" className="form-control" placeholder="0" />
		                        </div>
		                        <div className="form-group">
		                            <label className="gradient-color" for="exampleInputPassword1">What are your school's challenges as they relate to online lesson planning?</label>
		                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
		                        </div>
		                        <div className="form-group">
		                            <label className="gradient-color" for="exampleInputPassword1">What are your school's challenges as they relate to the teacher's grade book?</label>
		                            <textarea className="form-control" rows="3"></textarea>
		                        </div>
		                        <div className="form-group">
		                            <label className="gradient-color" for="exampleInputPassword1">What are your school's challenges as they relate to student's classwork?</label>
		                            <textarea className="form-control" rows="3"></textarea>
		                        </div>
		                        <div className="form-group">
		                            <label className="gradient-color" for="exampleInputPassword1">What are your school's goals as they relate to online lesson planning?</label>
		                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
		                        </div>
		                        <div className="form-group">
		                            <label className="gradient-color" for="exampleInputPassword1">What are your school's goals as they relate to the teacher's grade book?</label>
		                            <textarea className="form-control" rows="3"></textarea>
		                        </div>
		                        <div className="form-group">
		                            <label className="gradient-color" for="exampleInputPassword1">What are your school's goals as they relate to student's classwork?</label>
		                            <textarea className="form-control" rows="3"></textarea>
		                        </div>
	                        	<button type="button" className="btn btn-block btn-primary">Submit</button>
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
  	form: 'signupForm',
  	validate: (values) => {
    	const errors = {};
    	if(!values.contact_telephone_number) {
      		errors.contact_telephone_number = 'Contact number is required';
    	}  else if(!/^([0|[1-9][0-9]{9})$/i.test(_.replace(values.contact_telephone_number, /-|\s|\+1/g, ""))) {
    		errors.contact_telephone_number = 'Enter valid number';
    	}
    	return errors;
    }	
})(RegisterForm);

export default _RegisterForm;