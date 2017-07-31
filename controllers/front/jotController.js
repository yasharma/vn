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

    /*var s = "#Hello, this is a test @john@doe @chintesh_kumar";
        var re = /(?:^|)@([a-zA-Z_]+)/g, match, matches = [];
        while (match = re.exec(s)) {
            matches.push(match[1]);
    }*/

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



exports.uploadfile = (reqst, respe) => {
    let hotel_id        =   '';
    var totalDocument   =   [],
    form                =   new formidable.IncomingForm();
    form.multiples      =   true;
    form.keepExtensions =   true;

    form.on('field', function(name, value) {
        hotel_id = value;
    });
    
    form.on('file', function (name, file) {

        if (totalDocument.length > 4) {
            fs.unlink(file.path);
            respe.json(response.errors(totalDocument,"Warning: You can't upload more than 5 documents."));
        }

        var newdir      = './public/images/hotel/'+hotel_id+'/jot';
        var newpath     = newdir.replace(/\/$/, '').split('/');
        
        for (var i = 1; i <= newpath.length; i++) {
            var segment     = newpath.slice(0, i).join('/');
            !fs.existsSync(segment) ? fs.mkdirSync(segment) : null ;
        }

        var filename    = '';
        if (file) {
            
            filename = Date.now() + '-' + file.name;
            fs.rename(file.path, path.join(newdir+'/' + filename));
            totalDocument.push({
                status: true,
                filename: filename,
                type: file.type,
                publicPath: newdir+'/' + filename
            });
        }
    });

    form.on('error', function(err) {
        respe.json(response.errors(err,"Something went wrong with document Upload process."));
    });

    // Invoked when all the fields have been processed.
    form.on('end', function() {
        console.log('Uploading have been processed.');
    });

    // Parse the incoming form fields.
    form.parse(reqst, function (err, fields, files) {
       // let hotel_id = fields.hotel_id;
        respe.json(response.success(totalDocument,'Jot Added Successfully.'));
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
        
        Jot.findByIdAndUpdate(Jotid,{$set:reqst.query}, {new: true}, function(err, result) {
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
                                        jot_title   :   '$jot_title',
                                        priority    :   '$priority',
                                        status      :   '$status',
                                        due_date    :   '$due_date',
                                        checklist   :   '$checklist'
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