'use strict';

const    express            =   require('express'),
         app                =   express(),
         path               =   require('path'),
         _                  = require('lodash'),
         mongoose           =   require('mongoose'),
         bodyParser         =   require('body-parser'),
         Document           =   require(path.resolve('models/DocumentCenter')),
         response           =   require(path.resolve('./config/lib/response')),
         ObjectId           =   mongoose.Types.ObjectId;



/*****************************************
*** Function to add new Document *********
******************************************/
   
exports.addDocument = (reqst, respe) => {

    if(reqst.body){
        var Documentsave       = new Document(reqst.body);
        Documentsave.save(function (err, result) {
            if(result){
                var filesize        =   0;
                if(!_.isNull(result.files)){
                    var attachements    =   result.files;
                    for(let i = 0; i < attachements.length; i++ ){
                        filesize = parseInt(filesize) + parseInt(attachements[i].size);
                    } 
                }
                var _result = {
                                hotel_id                : result.hotel_id,
                                document_name           : result.document_name,
                                department              : result.department,
                                document_description    : result.document_description,
                                upload_date             : result.upload_date,
                                tags                    : result.tags,
                                files                   : result.files,
                                filesize                : filesize,
                            };
                return respe.json(response.success(_result,'Document has been Added Successfully.'));
            }else{
                return respe.json(response.errors(err.errors,'Error in Document Saved.'));
            }
        });
    }else{
        var errors =    { _id: {'message':'Document data is required.'}}
        return respe.json(response.errors(errors,"Error in Document save."));
    }
};

/***************************************************
**** Function to Update Existing Document **********
****************************************************/
                                            
exports.updateDocument = (reqst, respe) => {

    var Documentid          =   reqst.body._id;

    if(!Documentid){
        var errors =    { _id: {'message':'Document id is required.'}}
        return respe.json(response.errors(errors,"Error in Document data."));
    }else{
        Document.findByIdAndUpdate(Documentid,{$set:reqst.body}, {new: true, runValidators: true, context: 'query'}, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Document Updated successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Document update."));
            }
        });
    }
};


/***************************************************
**** Function to Delete Existing Document **********
****************************************************/

exports.deleteDocument = (reqst, respe) => {

    var Documentid          =         reqst.query._id;
    if(!Documentid){
        var errors =    { _id: {'message':'Document id is required.'}}
        return respe.json(response.errors(errors,"Error in Document data."));
    }else{
        Document.findByIdAndRemove(Documentid, function(err, result) {
            if(result){
                return respe.json( response.success(result,'Document Deleted successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in Document Deletion."));
            }
        });
    }
};

/******************************************
** Function to list all Documents **********
*******************************************/

exports.listDocument = (reqst, respe) => {
   
   var hotel_id             =         reqst.query.hotel_id;
   
    if(!hotel_id){
        var errors =    { hotel_id: {'message':'Hotel id is required.'}}
        return respe.json(response.errors(errors,"Error in Hotel data."));
    }else{
        Document.aggregate(
            [
                {$match: {hotel_id: ObjectId(hotel_id) }},
                {$project: {
                                document_name: 1,
                                document_description: 1,
                                files: 1,
                                hotel_id: 1,
                                department: 1,
                                upload_date: 1,
                                tags: 1,
                                filesize: { $sum: "$files.size" }
                            }
                }
            ], function (err, result) {
            if(result){
                return respe.json(response.success(result,'Document Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Document Listing."));
            }
        });
    }
};


