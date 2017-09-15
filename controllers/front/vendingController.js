'use strict';

const    express            =   require('express'),
         app                =   express(),
         path               =   require('path'),
         mongoose           =   require('mongoose'),
         bodyParser         =   require('body-parser'),
         Vending            =   require(path.resolve('models/Vending')),
         Category           =   require(path.resolve('models/Category')),
         Cart               =   require(path.resolve('models/Cart')),
         response           =   require(path.resolve('./config/lib/response')),
         ObjectId           =   mongoose.Types.ObjectId;



/***************************************
*** Function to add new Vending item ***
****************************************/
   
exports.addItem = (reqst, respe) => {

    var Vendingsave       = new Vending(reqst.body);
    Vendingsave.save(function (err, result) {
        if(result){
            return respe.json(response.success(result,'Item has been Added Successfully.'));
        }else{
            return respe.json(response.errors(err.errors,'Error in item Saved.'));
        }
    });
};

/***************************************************
******* Function to Update Existing Vending ******
***************************************************/
                                            
exports.updateItem = (reqst, respe) => {

    var item_id         	= 	reqst.body._id;

    if(!item_id){
        var errors =    { _id: {'message':'Item id is required.'}}
        return respe.json(response.errors(errors,"Error in Item data."));
    }else{
        Vending.findByIdAndUpdate(item_id,{$set:reqst.body}, {new: true, runValidators: true, context: 'query'}, function(err, result) {
            if(result){
              return respe.json(response.success(result,'Item Updated successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in item update."));
            }
        });
    }
};

/***************************************************
****** Function to Delete Existing Vending *******
****************************************************/

exports.deleteItem = (reqst, respe) => {

    var item_id         	=         reqst.query._id;
	if(!item_id){
        var errors =    { _id: {'message':'Item id is required.'}}
        return respe.json(response.errors(errors,"Error in Item data."));
    }else{
        Vending.findByIdAndRemove(item_id, function(err, result) {
    		if(result){
                return respe.json(response.success(result,'Item deleted successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in item Deletion."));
            }
        });
    }
};

/******************************************
***** Function to list all Vendings *****
*******************************************/

exports.listItem = (reqst, respe) => {
   
   var hotel_id          =         reqst.query.hotel_id;

    if(!hotel_id){
        var errors =    { hotel_id: {'message':'Hotel id is required.'}}
        return respe.json(response.errors(errors,"Error in Item data."));
    }else{
        Vending.find({hotel_id: hotel_id}, function (err, result) {
            if(result){
                return respe.json(response.success(result,'Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error in vending listing."));
            }
        });
    }
};


/******************************************
***** Function to add items into cart *****
*******************************************/

exports.addCart = (reqst, respe) => {
   
    var Cartsave       = new Cart(reqst.body);
    Cartsave.save(function (err, result) {
        if(result){
            return respe.json(response.success(result,'Item has been sold.'));
        }else{
            return respe.json(response.errors(err.errors,'Something went wrong.'));
        }
    });
};

/************************************************
*** Function to add new Vending category ********
*************************************************/
   
exports.addCategory = (reqst, respe) => {

    var Categorysave       = new Category(reqst.body);
    Categorysave.save(function (err, result) {
        if(result){
            return respe.json(response.success(result,'Category has been Added Successfully.'));
        }else{
            return respe.json(response.errors(err.errors,'Error in category Saved.'));
        }
    });
};

/**********************************************************
******* Function to Update Existing Vending category ******
***********************************************************/
                                            
exports.updateCategory = (reqst, respe) => {

    var category_id             =   reqst.body._id;
    if(!category_id){
        var errors =    { _id: {'message':'Category id is required.'}}
        return respe.json(response.errors(errors,"Error in Category data."));
    }else{
        Category.findByIdAndUpdate(category_id,{$set:reqst.body}, {new: true, runValidators: true}, function(err, result) {
            if(result){
              return respe.json(response.success(result,'Category Updated successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Category update."));
            }
        });
    }
};
/**********************************************************
****** Function to Delete Existing Vending category *******
***********************************************************/

exports.deleteCategory = (reqst, respe) => {

    var category_id             =         reqst.query._id;
    if(!category_id){
        var errors =    { _id: {'message':'Category id is required.'}}
        return respe.json(response.errors(errors,"Error in Category data."));
    }else{
        Category.findByIdAndRemove(category_id, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Category deleted successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in Category Deletion."));
            }
        });
    }
};

/********************************************
***** Function to list category of vending **
*********************************************/

exports.listCategory = (reqst, respe) => {
   
   var hotel_id          =         reqst.query.hotel_id;

    if(!hotel_id){
        var errors =    { hotel_id: {'message':'Hotel id is required.'}}
        return respe.json(response.errors(errors,"Error in Hotel data."));
    }else{
        Category.find({hotel_id: hotel_id}, function (err, result) {
            if(result){
                return respe.json(response.success(result,'Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error in Category listing."));
            }
        });
    }
};
