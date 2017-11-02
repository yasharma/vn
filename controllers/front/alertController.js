'use strict';

const  express            = require('express'),
       app                = express(),
       path               = require('path'),
       crypto             = require('crypto'),
       mongoose           = require('mongoose'),
        _                 = require('lodash'),
       bodyParser         = require('body-parser'),
       AlertDB            = require(path.resolve('models/Alerts')),
       Employee           = require(path.resolve('models/Employee')),
       Hotel              = require(path.resolve('models/Hotel')),
       User               = require(path.resolve('models/User')),
       NotificationDB     = require(path.resolve('models/Notification')),
       response           = require(path.resolve('./config/lib/response')),
       config             = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
       ObjectId           = mongoose.Types.ObjectId;         



/**************************************
*** Function to add new MeetingRoom ***
***************************************/

exports.addAlert = (reqst, respe) => {

    if(reqst.body){
       
        var alertSave    = new AlertDB(reqst.body);
        alertSave.save(function (err, alertdata) {
            if(alertdata){

              /**************** Save notification ********************/

              var notificationData = {
                title         :   reqst.body.title,
                description   :   reqst.body.description,
                from_user_id  :   reqst.body.user_id,
                type          :   "alert",
                from_hotel    :   reqst.body.hotel_id                
              };
              var notificationDataSave    = new NotificationDB(notificationData);
              notificationDataSave.save();

              /**************** End notification ********************/

              return respe.json(response.success(alertdata,'Alert Added Successfully.'));

            }else{
              return respe.json(response.errors(err.errors,'Error in alert saved.'));
            }
        });
    } else {
        var errors =    { _id: {'message':'Alert data is required.'}}
        return respe.json(response.errors(errors,"Error in alert data."));
    }
};



/******************************************
** Function to list all Contact ***********
*******************************************/

exports.listAlerts = (reqst, respe) => {
    var uid                =   reqst.query.user_id;

    AlertDB.aggregate([
                {
                   $lookup:
                   {
                     from: "hotels",
                     localField: "hotel_id",
                     foreignField: "_id",
                     as: "hotelObjects"
                   }
                },

                {
                 $project : 
                  { 
                    hotelObjects:{
                      _id       : 0, 
                      jot_types : 0 , 
                      currency  : 0,
                      updated   : 0,
                      created   : 0,
                      user_id   : 0,
                      status    : 0,
                      step      : 0,
                    }
                  } 
                }

               ],function (err, result) {
        if(result){
            return respe.json(response.success(result,'Alert Found.'));
        }else{
            return respe.json(response.errors(err,"Error In Alert Listing."));
        }
    });


        /*AlertDB.find(function (err, result) {
            if(result){
                return respe.json(response.success(result,'Alert Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Alert Listing."));
            }
        });*/    
};



/******************************************
** Function to list all Contact ***********
*******************************************/

exports.updateNotification = (reqst, respe) => {      


        var notificationId       =   reqst.body._id;
        var contactNumber        =   reqst.body.contact_number;

        if(!notificationId){
            var errors =    { _id: {'message':'Notification id is required.'}}
            return respe.json(response.errors(errors,"Error in notification data."));
        }else{

            NotificationDB.update(
               { _id: notificationId },
               { $push: { read_status: contactNumber } } , function(err, result) {
                if(result){
                    return respe.json(response.success(result,'Notification Deleted successfully.'));
                }else{
                    return respe.json(response.errors(err.errors,"Error in Notification Data."));
                }
            });
        }  
};




/******************************************
** Function to list all Contact ***********
*******************************************/

exports.listNotification = (reqst, respe) => {
    var uid                =   reqst.query.user_id;
    var contactNumber      =   reqst.query.contact_number;
        User.findOne({'contact_number': contactNumber},{role: 1, email: 1, status: 1, hotel_id: 1 }, function (err, userdata) {

            if(!_.isNull(userdata)) 
            {

                var condition = '';              

                    var assigned_hotel  = userdata.hotel_id;

                    Employee.find({contact_number: contactNumber},function (err, employee){
                        
                        if(employee && employee.length > 0){

                            var assigenedUserName = [];
                            var assigenedUserDept = [];


                          for(var i=0; i<employee.length; i++)
                          {
                              var empObj = employee[i];



                                condition = { 
                                              $and:[
                                                  {
                                                    $or:[  
                                                      {
                                                        $and:[
                                                          {"to_users"         : { $in: [empObj.user_name]}},
                                                          {"from_hotel"  : { $in:[empObj.hotel_id]}},
                                                        ]
                                                      },

                                                      {
                                                        $and:[
                                                          {"to_departments"   : { $in:empObj.departments}},
                                                          {"from_hotel"       : { $in:[empObj.hotel_id]}}
                                                        ]
                                                      }
                                                    ]
                                                  },                                        
                                                  {"read_status" : { $nin: [contactNumber]}}
                                              ]           
                                            };

                                NotificationDB.find(condition, function (err, result) {
                          
                                    if(result && result.length > 0){                                             
                                        respe.json(response.success(result,'Notification Found.'));
                                    }
                                });
                          }  
                        } else {

                          Hotel.find({user_id: userdata._id}, function(err, hoteldata){
                              var myHotels = [];
                              hoteldata.filter(function(obj){
                                  myHotels.push(obj._id);
                              });                         
                                
                                                                  
                                  NotificationDB.find({   
                                    $and:[
                                        {
                                          $or:[
                                            {"from_hotel"  : { $in: myHotels}},
                                            {"type"        : "alert"}
                                          ]
                                        },                                        
                                        {"read_status" : { $nin: [contactNumber]}}
                                    ]
                                  }, function (err, result) {
                                      
                                      if(result && result.length > 0){  
                                          respe.json(response.success(result,'Notification Found.'));
                                      }else{
                                          respe.json(response.errors(err,"Error in notification listing."));
                                      }
                                  });
                            });

                        }
                    });
                
            }else{
                respe.json(response.errors(err,"Error In Jot Listing."));
            }
        });
   
};