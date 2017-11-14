import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback, InputGroupAddon, InputGroup } from 'reactstrap';
export class FormSelect extends Component {
	render() {
		const {labelClassName, id, label, formGroupClassName, input, type} = this.props;
		return (
			<FormGroup className={formGroupClassName}>
	          	<Label className={labelClassName} for={id}>{label}</Label>
	          	<Input {...input} type={type}>
	          		{this.empty()}
		        	{this.options()}
		        </Input>	
	        </FormGroup>    
		);		
	}	

	options() {
		const { options, displayKey, displayLabel } = this.props;
		return options ? 
			options.map((values, index) => <option key={index} value={values[displayKey]}>{values[displayLabel]}</option>)
			: null;
	}

	empty() {
		const {empty, emptyText, label} = this.props;
		return empty ? (<option value="">{emptyText || label}</option>) : null;
	}
}

export default FormSelect;