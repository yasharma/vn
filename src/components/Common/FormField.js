import React, { Component } from 'react';
import { FormGroup, Label, Input, FormFeedback, InputGroupAddon, InputGroup } from 'reactstrap';
import InputMask from 'react-input-mask';

class FormField extends Component {
	render() {
		const {labelClassName, id, label, formGroupClassName, inputAddOn, inputAddOnText} = this.props;
		if( inputAddOn ) {
			return (
				<FormGroup className={formGroupClassName}>
					<Label className={labelClassName} for={id}>{label}</Label>
					<InputGroup>
			          	<InputGroupAddon>{inputAddOnText}</InputGroupAddon>
			          	{this.renderInput()}
		        	</InputGroup>
		        	{this.FormFeedback()}
		        </FormGroup>
			);			
		} else {
			return (
				<FormGroup className={formGroupClassName}>
		          	<Label className={labelClassName} for={id}>{label}</Label>
		          	{this.renderInput()}
		          	{this.FormFeedback()}
		        </FormGroup>
	    	);
		}
    	
	}
	FormFeedback() {
		const {meta, doValidate, maskInput} = this.props;
		if( (doValidate && maskInput) || doValidate) {
			return (<FormFeedback>{meta.touched && meta.error ? meta.error : null}</FormFeedback>);
		} else {
			return null
		}
	}
	renderInput() {
		const {meta, input, type, label, placeholder, labelClassName, className, doValidate, id, maskInput, size} = this.props;
		if( doValidate && maskInput ) {
			return ( <InputMask 
				{...input} 
				className={`form-control ${!meta.touched ? null : (meta.error ? 'is-invalid': null)}`} id={id} 
				placeholder={placeholder || label} type={type} 
				mask="999-999-9999" maskChar="_" /> 
			);
		} else if(doValidate) {
			return ( <Input 
				{...input} 
				className={className} id={id} 
				placeholder={placeholder || label} type={type} 
				valid={!meta.touched ? null : (meta.error ? false: null)} /> 
			);
		} else {
			return ( <Input 
				{...input} 
				size={size}
				className={className} id={id} 
				placeholder={placeholder || label} type={type} />
			);
		}
	}
}

export default FormField;