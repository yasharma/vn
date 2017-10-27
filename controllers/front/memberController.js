'use strict';

const    express            = require('express'),
         app                = express(),
         path               = require('path'),
         crypto             = require('crypto'),
         mongoose           = require('mongoose'),
          _                 = require('lodash'),
         bodyParser         = require('body-parser'),
         User               = require(path.resolve('models/User')),
         Employee           = require(path.resolve('models/Employee')),
         MemberSchedule     = require(path.resolve('models/MemberSchedule')),
         PhoneDirectory     = require(path.resolve('models/PhoneDirectory')),
         response           = require(path.resolve('./config/lib/response')),
         config             = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
         ObjectId           = mongoose.Types.ObjectId;         



/****************************************************************
*** Function to add Bulk Members at the time of Hotel Set-up ****
*****************************************************************/
   
exports.configureHotelMember = (reqst, respe) => {

    if(reqst.body.member_list){

        var memberdata             = reqst.body.member_list;
        var hotel_id               = reqst.body.hotel_id;
        var UpdatedData            =  [];
        var PhoneDirectoryData     =  [];

        /* manipulate user data beforesaving as  bulk record */
        _.map(memberdata, function(member){         

            let firstname         = member.first_name;
            let lastname          = member.last_name;
            let random            = Math.floor(10 + Math.random() * 90);
            let user_name         = firstname.charAt(0) + lastname + random;
            let signupKey         = crypto.createHash('md5').update((firstname + Math.floor((Math.random() * 1000) + 1))).digest("hex");
           
            UpdatedData.push({

                'first_name'            : member.first_name,
                'last_name'             : member.last_name,
                'email'                 : member.email,
                'contact_number'        : member.contact_number,
                'hotel_id'              : member.hotel_id,
                'departments'           : member.department,
                'user_name'             : user_name,
                'signupVerificationKey' : signupKey,
            });

            PhoneDirectoryData.push({
                'first_name'    : member.first_name,
                'last_name'     : member.last_name,
                'email'         : member.email,
                'contact'       : member.contact_number,
                'hotel_id'      : ObjectId(member.hotel_id),
                'tags'          : member.department.map(dept => '#' + dept),
            });
        });








        Employee.findOne({hotel_id: hotel_id}, function(err, empData){
            if(empData){

                Employee.remove({hotel_id: hotel_id}, function(err, deletedData) {                    
                    if(deletedData){

                        Employee.insertMany(UpdatedData, function (err, result) {
        
                            if(!_.isNull(result)){

                                PhoneDirectory.findOne({hotel_id: hotel_id}, function(err, phoneData){
                                if(phoneData)
                                {
                                    PhoneDirectory.remove({hotel_id: hotel_id}, function(err, deletedPhData) {
                                        if(deletedPhData){

                                            PhoneDirectory.insertMany(PhoneDirectoryData, function(err, phonedirectorydata)
                                            {
                                                return respe.json(response.success(result,'Members Added Successfully.'));
                                            });

                                        }
                                    });

                                } else {

                                    PhoneDirectory.insertMany(PhoneDirectoryData, function(err, phonedirectorydata)
                                    {
                                        return respe.json(response.success(result,'Members Added Successfully.'));
                                    });
                                }
                            });
                                
                            }else{
                                return respe.json(response.errors(err.errors,'Error in User Saved.'));
                            }
                        });

                       
                    }
                });

            } else {

                Employee.insertMany(UpdatedData, function (err, result) {
        
                    if(!_.isNull(result)){
                        PhoneDirectory.insertMany(PhoneDirectoryData, function(err, phonedirectorydata){
                            return respe.json(response.success(result,'Members Added Successfully.'));
                        });
                        
                    }else{
                        return respe.json(response.errors(err.errors,'Error in User Saved.'));
                    }
                });

            }

        });

    } else {
        var errors =    { _id: {'message':'Member data is required.'}}
        return respe.json(response.errors(errors,"Error in Member data."));
    }
    
};

/******************************************************************** 
*** Function to check the contact number is exists for this hotel ***
*********************************************************************
*********************************************************************/
exports.checkUsercontact = function (reqst, respe ,next) {

    if(!reqst.body.contact_number) {
        var errors      =    { contact_number: {'message':'Contact Number is required.'}}
        respe.json(response.errors(errors,"Contact Number is required."));
    }

    var contact_number      = reqst.body.contact_number;
    var employeeId          = reqst.body.employee_id;

    if(!_.isEmpty(employeeId)){

            Employee.findOne({ _id: ObjectId(employeeId)},{ signupVerificationKey: 1},function(err, employeedata){

                if(!_.isNull(employeedata) && employeedata.signupVerificationKey != ''){

                    User.findOne({ contact_number : contact_number}, {_id: 0,contact_number: 1,first_name: 1, last_name: 1},(err, result) => {
                            if(err){
                                 next(err);
                            }else{
                                if (result) {
                                    let _result = {'contact_number':{'first_name':result.first_name,'last_name':result.last_name,'contact_number':result.contact_number,'message': 'User is already exists with this contact number.'}};
                                        return respe.json(response.errors(_result,"User is already exists."));
                                } else {
                                    return respe.json(response.success({},"User doesn't exists."));
                                }
                            }
                         });
                }else{
                    let _errors = {"status": 3,"class":"Autherror","errors":{"invitation_url": {"message":"Your invitation link has been expired." }}, "message": "Your invitation link has been expired."}
                    return respe.json(_errors);
                }

            });
    }else{
        return respe.json(response.errors({},"Required data is missing."));
    }
};


/********************************************************************************************** 
**** Function to update the user's hotel after second invitation link for another Hotel. ******
***********************************************************************************************
***********************************************************************************************/

exports.UpdateUserHotelDetails = function (reqst, respe ,next) {

    if(!reqst.body) {
        var errors      =    { hotel_id: {'message':'Hotel id is required.'}}
        respe.json(response.errors(errors,"Hotel id is required."));
    }

    var contact_number      = reqst.body.contact_number;
    var newhotel            = reqst.body.hotel_id.toString();
    var employeeid          = reqst.body.employee_id;

    User.findOne({ $or:[{email : {$regex: new RegExp(`^${contact_number}`), $options:"im"}},{contact_number: contact_number}]},(err, result) => {
        if(err){
             next(err);
        }else{
            if (result) {
                let userhotelarr    = [];
                userhotelarr        = result.hotel_id;
                userhotelarr.push(newhotel);
                
                User.update({_id: ObjectId(result._id)},{hotel_id: userhotelarr},{new: true}, function(err, updatemember){

                    Employee.update({_id: ObjectId(employeeid)},{$set: {signupVerificationKey: '',invitationstatus: 'verified'}} ,function(){
                            return respe.json(response.success(updatemember,"User's hotel data updated successfully."));
                        });
                    
                });
            } else {
                return respe.json(response.success({},"User's detail not found."));
            }
        }
     });
};


/************************************************************************************* 
**** Function for saving member details into user table for the very first time ******
**************************************************************************************
**************************************************************************************/


exports.memberSignUp = (reqst, respe)=>   {

    var  signupVerificationKey      = reqst.body.token;
    var  contact_number             = reqst.body.contact_number;

    
    Employee.findOne({ signupVerificationKey: signupVerificationKey,contact_number: contact_number },{ first_name: 1, last_name: 1, email: 1, contact_number: 1, hotel_id: 1, departments: 1,user_name: 1,profile_image: 1},
        function(err, result){

            if(err){
                next(err);
            }else{
                if (result) {

                    /* Save member details into User table. */
                    var MemberData        =   {

                        first_name      : reqst.body.first_name,
                        last_name       : reqst.body.last_name,
                        email           : result.email,
                        contact_number  : result.contact_number,
                        hotel_id        : result.hotel_id.toString(),
                        password        : reqst.body.password,
                        user_name       : result.user_name,
                        profile_image   : reqst.body.profile_image,
                        role            : 'staff',
                        
                    };

                    var employeeId          = result._id;
                    let memberSave          = new User(MemberData);

                    memberSave.save(function(err, user) {

                        Employee.update({_id: ObjectId(employeeId)},{$set: {signupVerificationKey: '',invitationstatus : 'verified'}} ,function(){
                            return respe.json(response.success(user,"Sign up successfully."));
                        });
                    });
                } else {
                    return respe.json(response.errors({},"Your Link has been expired. Please contact to your administrator."));
                }
            }
        }
    );
}



/******************************************************************** 
*** Function to check the Email address is exists for this hotel ***
*********************************************************************
*********************************************************************/


exports.checkUseremail = function (reqst, respe ,next) {

    if(!reqst.body.email) {
        var errors      =    { email: {'message':'Email address is required.'}}
        respe.json(response.errors(errors,"Email address is required."));
    }

    let email               = reqst.body.email,
    tmpEmail                = _.escapeRegExp(reqst.body.email);
    var hotel_id            = reqst.body.hotel_id;

    Employee.findOne({email : {$regex: new RegExp(`^${tmpEmail}`), $options:"im"},  hotel_id : ObjectId(hotel_id)}, {_id: 0,email: 1,first_name: 1, last_name: 1},(err, result) => {
        if(err){
             next(err);
        }else{
            if (result) {
                return respe.json(response.errors(result,"Email address is already exists for this hotel."));
            } else {
                return respe.json(response.success({},'Email address is valid.'));
            }
        }
     });
};



/*********************************
*** Function to add new Member ***
**********************************/

exports.addMember = (reqst, respe) => {

    if(reqst.body){

        
        let firstname               = reqst.body.first_name;
        let lastname                = reqst.body.last_name;
        let random                  = Math.floor(10 + Math.random() * 90);
        var hotel_id                = reqst.body.hotel_id;
        var contact_number          = reqst.body.contact_number;
        reqst.body.user_name        = firstname.charAt(0) + lastname + random;
        var Membersave              = new Employee(reqst.body);



        Employee.findOne({ contact_number : contact_number, hotel_id : ObjectId(hotel_id)}, {_id: 0,contact_number: 1,first_name: 1, last_name: 1},(err, result) => {
            if(err){
                 next(err);
            }else{
                if (!_.isNull(result)) {
                    let _result = {'contact_number':{'first_name':result.first_name,'last_name':result.last_name,'contact_number':result.contact_number,'message': 'Contact number is already exists for this hotel.'}};
                    return respe.json(response.errors(_result,"Contact number is already exists for this hotel."));
                } else {
                    Membersave.save(function (err, memberdata) {
                        if(memberdata){
                            return respe.json(response.success(memberdata,'Member Added Successfully.'));
                        }else{
                            return respe.json(response.errors(err.errors,'Error in Member Saved.'));
                        }
                    });
                }
            }
        });
    }else{
        var errors =    { _id: {'message':'Member data is required.'}}
        return respe.json(response.errors(errors,"Error in Member data."));
    }
};

/*******************************************
**** Function to Update Existing Member ****
********************************************/


exports.updateMember =  (reqst, respe) => {
 
    var Memberid         	= reqst.body._id;
    if(!Memberid){
        var errors =    { _id: {'message':'Member id is required.'}}
        return respe.json(response.errors(errors,"Error in Member Update."));
    }else{

        Employee.findByIdAndUpdate(Memberid,{$set:reqst.body}, {new: true, runValidators: true, context:'query'}, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Member updated successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Member update."));
            }
        });
    }
};

/******************************************
**** Function to Delete Existing Member ***
*******************************************/

exports.deleteMember = (reqst, respe) => {

    var Memberid         	= reqst.query._id;
    if(!Memberid){

        var errors =    { _id: {'message':'Member id is required.'}}
        return respe.json(response.errors(errors,"Error in Member Deletion."));

    }else{
        Employee.findByIdAndRemove(Memberid, function(err, result) {

            if(result){
                return respe.json(response.success(result,'Member deleted successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in Member Deletion."));
            }
            
        });
    }
};

/*********************************************************************
** Function to list all Members after approval from Main User table **
**********************************************************************/

exports.listMember = (reqst, respe) => {

    var first_name          = reqst.query.first_name;
    var hotel_id            = reqst.query.hotel_id;
    var filter              = reqst.query.filter;
   
   

    if(filter == 1){
       Employee.find({'first_name' : new RegExp(first_name, 'i'),hotel_id: hotel_id}, function (err, result) {
            if(result.length > 0){
                return respe.json(response.success(result,'Member Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Member Listing."));
            }
        });
    }else{
        Employee.find({hotel_id: hotel_id}, function (err, result) {
            if(result.length > 0){
                return respe.json(response.success(result,'Member Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Member Listing."));
            }
        });
    }
};

/****************************************
**** Function to Add Member Schedule ****
*****************************************/
exports.addSchedule = (reqst, respe) => {

    var MemberSchedulesave          = new MemberSchedule(reqst.body);
    var hotel_id                    = reqst.body.hotel_id;
    var user_id                     = reqst.body.user_id;
    var shift_date                  = reqst.body.shift_date;
    var department                  = reqst.body.department;
    var scheduledata                = [];


    if(reqst.body.schedule_data){
            
        MemberSchedule.findOne({'hotel_id': ObjectId(hotel_id),'user_id': ObjectId(user_id),'shift_date': shift_date,'department': department}, function(err, result){
            
            if(result){
                    
                    scheduledata            = reqst.body.schedule_data;
                    var scheduleid          = mongoose.Types.ObjectId(result._id);

                    MemberSchedule.findOneAndUpdate({'_id': scheduleid},{$set:{'schedule_data': scheduledata }},{ new: true }, function(errs, results) {

                        if(results){
                            return respe.json(response.success(results,'Member schedule has been successfully Updated.'));
                        } else {
                            return respe.json(response.errors(err.errors,'Error in Member schedule Update.'));
                        }

                    });
            }else{
                MemberSchedulesave.save(function (err, result) {
                    if(result){
                        return respe.json(response.success(result,'Member schedule has been successfully added.'));
                    }else{
                        return respe.json(response.errors(err.errors,'Error in Member schedule Saved.'));
                    }
                });
            }
        });
    }
};



/************************************************************
**** Function to Add Multiple days Schedule for a member ****
*************************************************************/

exports.addMultipleSchedule = (reqst, respe) => {

    var scheduleData                        = reqst.body.multiple_schedule;
    var UpdatedSchedule                     =  [];

        /* manipulate schedule data beforesaving as  bulk record */
        _.map(scheduleData, function(schedule){
            
            UpdatedSchedule.push({

                'user_id'                    : ObjectId(schedule.user_id),
                'hotel_id'                   : ObjectId(schedule.hotel_id),
                'shift_date'                 : schedule.shift_date,
                'department'                 : schedule.department,
                'shift_filter_date'          : schedule.shift_filter_date,
                'schedule_data'              : schedule.schedule_data,
            });

        });
       
        MemberSchedule.insertMany(UpdatedSchedule, function (err, result) {
        
            if(!_.isNull(result)){
                return respe.json(response.success(result,'Member Schedule Added Successfully.'));
            }else{
                return respe.json(response.errors(err.errors,'Error in Schedule Save.'));
            }
        });
};





exports.MemberScheduleData = (reqst, respe) => {

    var Hotel_id            = reqst.query.hotel_id;
    var from_date           = parseInt(reqst.query.from_date);
    var to_date             = parseInt(reqst.query.to_date);
 
    Employee.aggregate(
                [
                    {$match: {'hotel_id': ObjectId(Hotel_id)}},
                    {$lookup :  {
                                    from: "memberschedules",
                                    localField: "_id",
                                    foreignField: "user_id", 
                                    as: "ScheduleData" 
                                }
                    },
                    {$project: {
                                    "email": 1, "first_name": 1, "last_name": 1, "departments": 1, "contact_number": 1, "position": 1, "profile_image": 1, "hotel_id": 1, "status": 1,
                                    "Scheduledata": {
                                       "$filter": {
                                           "input": "$ScheduleData",
                                           "as": "subdata",
                                           "cond":{ $and: [
                                                { $gte: [ "$$subdata.shift_date",from_date ] },
                                                { $lte: [ "$$subdata.shift_date",to_date ] }
                                            ] }
                                        },
                                    }
                                }
                    }
                ], function (err, result) {
            if(result){
                return respe.json(response.success(result,'Member Schedule Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Member Schedule Listing."));
            }
        });
};