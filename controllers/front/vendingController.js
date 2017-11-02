'use strict';

const    express            =   require('express'),
         app                =   express(),
         path               =   require('path'),
         mongoose           =   require('mongoose'),
         bodyParser         =   require('body-parser'),
         _                  =   require('lodash'),
         async              =   require('async'),
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
    if(reqst.body){
        Vendingsave.save(function (err, result) {
            if(result){
                return respe.json(response.success(result,'Item has been Added Successfully.'));
            }else{
                return respe.json(response.errors(err.errors,'Error in item Saved.'));
            }
        });
    }else{
        var errors =    { _id: {'message':'Item data is required.'}}
        return respe.json(response.errors(errors,"Error in Item data."));
    }
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
   
    if(!_.isEmpty(reqst.body)){

        async.waterfall([
            
                function updateVending(callback) {
                        
                    var vendingdata                 =       reqst.body.items;
                    _.forEach(vendingdata,  function(inventory) {
                        let updatedQty              = parseInt(inventory.quantity) - parseInt(inventory.editquantity);
                        let itemId                  = inventory._id;
                        Vending.update({_id: ObjectId(itemId)},{$set:{quantity: updatedQty}}, function(){});  
                        
                    });
                    callback(null, reqst.body);
                },
                function saveCart(documentdata, callback) {

                        var Cartsave       = new Cart(documentdata);
                        Cartsave.save(function (err, result) {
                            if(result){
                                 callback(null,result);
                            }else{
                                callback(err.errors,null);
                            }
                        });
                }], function (err, result) {
                if(err){
                    var errors =    { _id: {'message':'Error in Cart save.'}}
                    return respe.json(response.errors(errors,"Error in Cart save."));
                }
                return respe.json(response.success(result, 'Cart data has been saved successfully.')); 
            });
    }else{
        var errors =    { _id: {'message':'Cart data is required.'}}
        return respe.json(response.errors(errors,"Cart data is required."));
    }
};


/************************************************
*** Function to add new Vending category ********
*************************************************/
   
exports.addCategory = (reqst, respe) => {

    if(!_.isEmpty(reqst.body)){

        var Categorysave       = new Category(reqst.body);

        Categorysave.save(function (err, result) {
            if(result){
                return respe.json(response.success(result,'Category has been Added Successfully.'));
            }else{
                return respe.json(response.errors(err.errors,'Error in category Saved.'));
            }
        });
    }else{
        var errors =    { _id: {'message':'Category data is required.'}}
        return respe.json(response.errors(errors,"Error in Category data."));
    }
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
        Category.findByIdAndUpdate(category_id,{$set:reqst.body},{new: true,runValidators:true},function(err, result) {
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
        Category.find({hotel_id: ObjectId(hotel_id)}, function (err, result) {
            if(result){
                return respe.json(response.success(result,'Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error in Category listing."));
            }
        });
    }
};



/*************************************************
***** Function to list all sale made by user *****
**************************************************/


exports.vendingSale = (reqst, respe) => {
    
    var hotel_id          =         reqst.query.hotel_id;
    var user_id           =         reqst.query.user_id;

    if(!hotel_id || !user_id){
        var errors =    { _id: {'message':'Filter data is required.'}}
        return respe.json(response.errors(errors,"Filter data is required."));
    }else{
        Cart.find({hotel_id:ObjectId(hotel_id),user_id:ObjectId(user_id)},function (err, result) {
            if(result && result.length > 0){
                return respe.json(response.success(result,'Sale Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error in sale listing."));
            }
        });
    }
};


/*************************************************
***** Function to cancle the particular sale *****
**************************************************/


exports.vendingCancleSale = (reqst, respe) => {

    var sale_id           =         reqst.body._id;

    if(!sale_id){
        var errors =    { _id: {'message':'Data is required.'}}
        return respe.json(response.errors(errors,"Data is required."));
    }else{
        Cart.findByIdAndUpdate(sale_id,{status:'cancelled'},{new: true},function(err, result) {
            if(result){

                /*************************************************
                * Add item back to inventory 
                **************************************************/

               for(var i=0; i<result.items.length; i++)
               {

                    Vending.update(
                        { "_id" : ObjectId(result.items[i]._id) },
                        { $inc: { "quantity" : parseInt(result.items[i].editquantity) } }
                        ,function(err, invUpdateResult) {});
               }

              return respe.json(response.success(result,'Sale cancelled successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Sale canclelation."));
            }
        });
    }
};



/********************************************************
***** Function to change the payment status of sale *****
*********************************************************/


exports.vendingPaymentStatus = (reqst, respe) => {

    var sale_id           =         reqst.body._id;
    var payment_status    =         reqst.body.payment_status;

    if(!sale_id){
        var errors =    { _id: {'message':'Data is required.'}}
        return respe.json(response.errors(errors,"Data is required."));
    }else{
        Cart.findByIdAndUpdate(sale_id,{"payment.payment_status":payment_status},{new: true},function(err, result) {
            if(result){
              return respe.json(response.success(result,'Sale cancelled successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Sale canclelation."));
            }
        });
    }
};
