'use strict';

const   express     = require('express'),
        app         = express(),
        path        = require('path'),
        mongoose    = require('mongoose'),
        bodyParser  = require('body-parser'),
        Jot         = require(path.resolve('models/Jot')),
        stream      = require(path.resolve('./config/lib/streamifier')),
        response    = require(path.resolve('./config/lib/response')),
        config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
        formidable  = require('formidable'),
        fileType    = require('file-type'),
        fs          = require('fs'),
        readChunk   = require('read-chunk');
        


/********************************
*** Function to add new Jot *****
*********************************/

exports.addJot = (reqst, respe) => {

    var data            = {};
    var Jotsave         = new Jot(reqst.body);

    if(!reqst.body.jot_title){
        return respe.json(response.errors({},'Jot Title is required.'));
    }
    Jotsave.save(function (err, result) {
        if(result){
            respe.json(response.success(result,'Jot Successfully Added.'));
        }else{
            respe.json(response.errors(err,'Error in Jot Saved.'));
        }
    });
};


/****************************************
**** Function to Update Existing Jot ****
*****************************************/


exports.updateJot = (reqst, respe) => {

    var data            = {};
    var Jotid           = reqst.query.jot_id;
        
    if(!Jotid){
        return respe.json(response.errors({},'Jot id is required.'));
    }else{
        
        Jot.findByIdAndUpdate(Jotid,{$set:reqst.query}, {new: true, runValidators: true}, function(err, result) {
            if(result){
                respe.json(response.success(result,'Jot Updated successfully.'));
            }else{
                respe.json(response.errors(err,"Error In Jot Update."));
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
        return respe.json(response.errors({},'Jot Id is Required.'));
    }else{
        Jot.findByIdAndRemove(Jotid, function(err, result) {
            if(result){
                respe.json(response.success(result,'Jot Deleted successfully.'));
            }else{
                respe.json(response.errors(err,"Error in jot Deletion."));
            }
        });
    }
};


/********************************
** Function to list all Jots **
*********************************/

exports.listJot = (reqst, respe) => {

    var data            = {};
    var Hotel_id        = reqst.query.hotel_id;
   
    if(!Hotel_id){
        return respe.json(response.errors({},'Hotel Id is Required.'));
    }else{
        Jot.aggregate(
                    [
                        { $match: {'hotel_id': Hotel_id}},
                        { $group:
                            { _id: '$jot_type',
                                jot_data: {
                                    $push: {
                                        _id         :   '$_id',
                                        jot_title   :   '$jot_title',
                                        priority    :   '$priority',
                                        status      :   '$status',
                                        due_date    :   '$due_date',
                                        checklist   :   '$checklist',
                                        assigned_to :   '$assigned_to',
                                        department  :   '$department'
                                    }
                                }
                            }
                        }
                    ], function (err, result) {
            if(result){
                respe.json(response.success(result,'Jots Data Found.'));
            }else{
                respe.json(response.errors(err,"Error In Jot Listing."));
            }
        });
    }
};