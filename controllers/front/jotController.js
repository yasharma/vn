'use strict';

const   express     = require('express'),
        app         = express(),
        path        = require('path'),
        mongoose    = require('mongoose'),
        bodyParser  = require('body-parser'),
        async       = require('async'),
        fs          = require('fs-extra'),
        _          = require('lodash'),
        Document    = require(path.resolve('models/DocumentCenter')),
        Jot         = require(path.resolve('models/Jot')),
        JotActivity = require(path.resolve('models/JotActivity')),
        User        = require(path.resolve('models/User')),
        response    = require(path.resolve('./config/lib/response')),
        config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
        ObjectId    = mongoose.Types.ObjectId;       
        


/********************************
*** Function to add new Jot *****
*********************************/


exports.addJot = (reqst, respe) => {

    if(!reqst.body.jot_title){
        var errors =    { jot_title: {'message':'Jot Title can not be empty'}}
        return respe.json(response.errors(errors,"Error in Jot Saved."));
    }
    

    var jot_description             = reqst.body.jot_description;
    var jot_members                 = reqst.body.jot_members;
    var departments                 = reqst.body.department;
    

    var AtRateTagReg    = /(?:^assignedMembersArr|)@([a-zA-Z_0-9]+)/g;
    var HashTagReg      = /(?:^|)#([a-zA-Z_0-9/-]+)/g;

    var member,jotmembers,depttags, AssignedMembers = [];
    var jotdepartments, AssignedDepartments = [];
    
    
    /* Code to get assigned Members in jot title */
    if(!_.isEmpty(jot_description)){

        while (member = AtRateTagReg.exec(jot_description)) {
            AssignedMembers.push(member[1]);
        }
    }
    
    /* Code to get assigned Staff Manager in jot */
    if(!_.isEmpty(jot_members)){
        while (jotmembers = AtRateTagReg.exec(jot_members)) {
            AssignedMembers.push(jotmembers[1]);
        }
    }

    /* Code to get assigned Department in jot */
    if(!_.isEmpty(departments)){

        while (jotdepartments = HashTagReg.exec(departments)) {
            AssignedDepartments.push(jotdepartments[1]);
        }
    }

    if(!_.isEmpty(jot_description)){
        
        while (depttags = HashTagReg.exec(jot_description)) {
            AssignedDepartments.push(depttags[1]);
        }
    }
    
    if(AssignedMembers){
       
       var AssignedMemberArr = AssignedMembers;
        var uniqueMember = AssignedMemberArr.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            });
        reqst.body.assigned_members             =   uniqueMember;
    }

    if(AssignedDepartments){
       
        var AssignedDeptArr = AssignedDepartments;
        var uniqueDept = AssignedDeptArr.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            });
        reqst.body.assigned_departments     =   uniqueDept;
    }
    
    
    if(reqst.body.image == ''){
        delete reqst.body.image;
    }
    
    var Jotsave                                 =   new Jot(reqst.body);

    Jotsave.save(function (err, result) {
        if(result){
            return respe.json(response.success(result,'Jot Successfully Added.'));
        }else{
            return respe.json(response.errors(err,'Error in Jot Saved.'));
        }
    });
};


/****************************************
**** Function to Update Existing Jot ****
*****************************************/


exports.updateJot = (reqst, respe) => {

    var data            = {};
    var Jotid           = reqst.body.jot_id;
    var AtRateTagReg    = /(?:^|)@([a-zA-Z_0-9]+)/g;
    var HashTagReg      = /(?:^|)#([a-zA-Z_0-9/-]+)/g;

    var jotmembers, member, depttags,jotdepartments, AssignedMembers = [], AssignedDepartments = [];

     /* Code to get assigned Members/Departments in jot */

    if(!_.isEmpty(reqst.body.jot_description)){
        
        while (depttags = HashTagReg.exec(reqst.body.jot_description)) {
            AssignedDepartments.push(depttags[1]);
        }
        
    }

    if(!_.isEmpty(reqst.body.department)){

        while (jotdepartments = HashTagReg.exec(reqst.body.department)) {
            AssignedDepartments.push(jotdepartments[1]);
        }
    }

    if(!_.isEmpty(reqst.body.jot_description)){

        while (member = AtRateTagReg.exec(reqst.body.jot_description)) {
            AssignedMembers.push(member[1]);
        }
    }

    if(!_.isEmpty(reqst.body.jot_members)){
        while (jotmembers = AtRateTagReg.exec(reqst.body.jot_members)) {
            AssignedMembers.push(jotmembers[1]);
        }
    
    }

    if(AssignedMembers){
       
        var AssignedMemberArr = AssignedMembers;
        var uniqueMember = AssignedMemberArr.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            });
       
        reqst.body.assigned_members                     =   uniqueMember;
    }

    if(AssignedDepartments){
       
        var AssignedDeptArr = AssignedDepartments;
        var uniqueDept = AssignedDeptArr.filter(function(elem, index, self) {
                return index == self.indexOf(elem);
            });
        reqst.body.assigned_departments     =   uniqueDept;
    }

    if(reqst.body.image == ''){
        delete reqst.body.image;
    }

    if(!Jotid){
        var errors =    { jot_id: {'message':'Jot id is required.'}}
        return respe.json(response.errors(errors,"Error in Jot data."));
    }else{
        
        Jot.findByIdAndUpdate(Jotid,{$set:reqst.body}, {new: true, runValidators: true}, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Jot Updated successfully.'));
            }else{
                return respe.json(response.errors(err,"Error In Jot Update."));
            }
        });
    }
};

/****************************************
**** Function to Delete Existing Jot ****
*****************************************/


exports.deleteJot = (reqst, respe) => {


    var data            = {};
    var Jotid           = reqst.query.jot_id;

    if(!Jotid){
        var errors =    { jot_id: {'message':'Jot id is required.'}}
        return respe.json(response.errors(errors,"Error in Jot data."));
    }else{
        Jot.findByIdAndRemove(Jotid, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Jot Deleted successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in jot Deletion."));
            }
        });
    }
};


/********************************
** Function to list all Jots **
*********************************/

exports.listJot = (reqst, respe) => {

    var data            = {};
    var jot_type        = reqst.query.jot_type;
    var assigned_to     = reqst.query.user_name;
    var hotel_id        = reqst.query.hotel_id;
      
   
    if(!jot_type){
        var errors =    { jot_type: {'message':'Jot type is required.'}}
       return respe.json(response.errors(errors,"Error in Jot data."));
    }else{


        User.findOne({'user_name': assigned_to},{role: 1, position: 1, email: 1, department: 1, status: 1,hotel_id: 1 }, function (err, userdata) {

            if(!_.isEmpty(userdata)){

                var condition = '';

                if(userdata.role === 'staff'){
                    condition = {
                                    "hotel_id": ObjectId(hotel_id),
                                    "jot_type": jot_type,
                                    $or:[{  "assigned_members"      :   { $in:  [assigned_to] } },
                                         {  "assigned_departments"    :   { $in:  [userdata.department] } }]
                                };
                }else{
                    condition = {
                        "hotel_id": ObjectId(hotel_id),
                        "jot_type": jot_type,
                    };
                }
            
                Jot.find(condition, function (err, result) {


                    if(result.length > 0){

                        var MyJotArray                      =       [];
                        var CloseJotArray                   =       [];
                        var MyDepartmentJotArray            =       [];
                        let _result                         =       [];

                        if(userdata.role === 'staff'){

                            for(var i = 0; i < result.length; i++){
                                
                                var assignedMembersArr      = result[i].assigned_members;
                                var assignedMemberDeptArr   = result[i].assigned_departments;
                                
                                if( result[i].status === 'complete'){
                                    CloseJotArray.push(result[i]);
                                }else{
                                    if((assignedMembersArr.indexOf(assigned_to) === 0 && assignedMemberDeptArr.indexOf(userdata.department) === 0) || (assignedMembersArr.indexOf(assigned_to) === 0)){
                                        MyJotArray.push(result[i]);
                                    }else{
                                        MyDepartmentJotArray.push(result[i]);
                                    }
                                }
                            }
                            _result = {
                                        my: MyJotArray,
                                        department: MyDepartmentJotArray,
                                        closed: CloseJotArray
                                    };
                        }else{
                            _result = result;
                        }
                    
                        respe.json(response.success(_result,'Jot Data Found.'));

                    }else{
                         respe.json(response.errors(err,"Error In Jot Listing."));
                    }
                });

            }else{
                 respe.json(response.errors(err,"Error In Jot Listing."));
            }
        });
    }
};

/*****************************************
*** Function to Move Document *********
******************************************/
exports.moveDocument = (reqst, respe) => {

    /*
    1- Get the name of all attachments (Name of all attachments in array,jot_id)
    2- Check attachments exists in folder(hotel_id,folder_name required)
    3- Move all attachments into DC (New path will be sent into response)
    4- Save new entry into database of Document center(Updated attachments path).
    5- Update jot table as well for future(already moved.)
    */

    var hotel_id                    = reqst.body.hotel_id;
    var attachment_data             = reqst.body.files;
    var newDocument                 = [];
    var errors                      = "";

    if(_.isEmpty(reqst.body.document_name)){
        var errors =    {document_name: {'message':'Document name can not be empty'}}
        return respe.json(response.errors(errors,"Error in Document Saved."));
    }else{

        if(!_.isEmpty(attachment_data)){

            async.waterfall([
            
                function movedocument(callback) {
                        
                        _.map(attachment_data, function(singleAttachment){

            
                            if( fs.existsSync(singleAttachment.publicPath) ){
                            
                                let document_center_image_path = './public/images/hotel/'+hotel_id+'/document_center';
                                
                                if( !fs.existsSync(document_center_image_path) ){
                                    fs.mkdirSync(document_center_image_path);
                                }

                                let original_filename               = singleAttachment.filename;
                                var absolute_original_document_path = `${document_center_image_path}/${original_filename}`;
                               
                                fs.copySync(singleAttachment.publicPath,absolute_original_document_path);

                                newDocument.push({
                                    status: true,
                                    filename: original_filename,
                                    type: singleAttachment.type,
                                    size: singleAttachment.size,
                                    publicPath: absolute_original_document_path
                                });
                        
                            }else{
                                errors  =   {field:'404 not found',message:'File not found in directory.'};
                            }

                        });
                    callback(errors, newDocument);
                },
                function saveDocument(documentdata, callback) {

                    if(!_.isEmpty(documentdata)){

                        var Jotid              = reqst.body.jot_id;
                        var Jot_type           = reqst.body.jot_type;

                        reqst.body.files       = documentdata;
                        reqst.body.ismoved     = 'moved';
                        reqst.body.moved_data  = {'jot_id': Jotid,'type': Jot_type};

                        var Documentsave       = new Document(reqst.body);
                        Documentsave.save(function (err, docresult) {
                            if(docresult){
                                /*Update Jot here as well for future.*/
                                Jot.findByIdAndUpdate(Jotid,{$set:{move_dc: 'yes'}},{new: true}, function(err, jotresult) {
                                    if(jotresult){
                                        callback(null,jotresult);
                                    }else{
                                        callback("Error in updating jot.",null);
                                    }
                                });
                            }else{
                                callback("Error in uploading the document.",null);
                            }
                        });
                    }else{
                        callback("New updated document not found.",null);
                    }
                }
            ], function (err, result) {
                if(err){
                    return respe.json(response.errors(err, err.message)); 
                }
                return respe.json(response.success(result, 'Files has been moved to document center successfully.')); 
            });  
        }else{
            return respe.json(response.errors({},"Nothing to move."));
        }
    }        
};


/**************************************************** 
***** Function to add activity on particular jot ****
******************************************************/

exports.addJotActivity = (reqst, respe) => {

    if(!reqst.body.message){
        var errors =    { message: {'message':'Activity message can not be empty.'}}
        return respe.json(response.errors(errors,"Activity message can not be empty."));
    }

    var JotActivitysave      =   new JotActivity(reqst.body);

    JotActivitysave.save(function (err, result) {
        if(result){
            return respe.json(response.success(result,'Jot Activity Successfully Added.'));
        }else{
            return respe.json(response.errors(err,'Error in Jot Activity Saved.'));
        }
    });
};

/**************************************************** 
***** Function to list activity on particular jot ****
******************************************************/

exports.listJotActivity = (reqst, respe) => {

    var jot_id          = reqst.query.jot_id;
    var hotel_id        = reqst.query.hotel_id;

    if(!jot_id){
        var errors =    { jot_id: {'message':'Jot id is required.'}}
        return respe.json(response.errors(errors,"Jot id is required."));
    }else{

            JotActivity.aggregate([
                        {$match  :    {'jot_id': ObjectId(jot_id),'hotel_id': ObjectId(hotel_id)}},
                        {$lookup :  {
                                        from: "users",
                                        localField: "user_id",
                                        foreignField: "_id", 
                                        as: "userdata" 
                                }
                        },
                        {$project: 
                                    {
                                        "message": 1,
                                        "attachment": 1,
                                        "post_date": 1,
                                        "userdata.first_name": 1,
                                        "userdata.last_name": 1,
                                        "userdata.user_name": 1,
                                        "userdata.department": 1,
                                        "userdata.profile_image": 1
                                    }
                        }], function (err, result) {
            if(result){
                return respe.json(response.success(result,'Jot Activity Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Jot Activity Listing."));
            }
        });
    }
};