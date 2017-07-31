'use strict';

/**
 * commaon function for entire application
 * Return the success format with data object
 * data: {
 *  // your format
 * }
 */
function success(responseObj, message){
    return {

    	status: 1,
        result: responseObj,
        class: 'Authsuccess',
        message: message || 'success'
    };
}



/**
 * commaon function for entire application
 * Return the error format with errors object
 * errors: {
 *  // your format
 * }
 */
function errors(errorObj, message){
    return{

    	status:2,
        errors: errorObj,
        class: 'Autherror',
        message: message || 'error'
    };
}

module.exports = {success: success, errors: errors };