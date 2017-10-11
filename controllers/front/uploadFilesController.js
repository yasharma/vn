'use strict';

const   express     = require('express'),
        app         = express(),
        path        = require('path'),
        mongoose    = require('mongoose'),
        bodyParser  = require('body-parser'),
        response    = require(path.resolve('./config/lib/response')),
        formidable  = require('formidable'),
        _           = require('lodash'),
        fs          = require('fs'),
        async       = require('async');
         
  

exports.uploadfiledata = (reqst, respe) => {
    let hotel_id            =   '';
    var totalDocument       =   [],
    form                    =   new formidable.IncomingForm();
    form.multiples          =   true;
    form.keepExtensions     =   true;

    async.waterfall([
        
        function (callback) {
            form.parse(reqst, function (err, fields, files) {
               callback(err, fields, files);
            });
            
        },
        function (fields, files, callback) {

            var hotel_id            = fields.hotel_id;
            var folder_name         = fields.folder_name;
            let filedata            = files.file;

            if(!_.isNull(filedata)){
                  
                if(!_.isEmpty(hotel_id)){
                    var newdir      = './public/images/hotel/'+hotel_id+'/'+folder_name;
                }else{
                    var newdir      = './public/images/'+folder_name;
                }
                
                var newpath     = newdir.replace(/\/$/, '').split('/');
                
                for (var i = 1; i <= newpath.length; i++) {
                    var segment   = newpath.slice(0, i).join('/');
                    !fs.existsSync(segment) ? fs.mkdirSync(segment) : null ;
                }

                
                let type_of_files = Object.prototype.toString.apply(filedata);
                if(type_of_files === '[object Object]'){
                   
                        var filename    = '';
                        filename = Date.now() + '-' + filedata.name;
                        fs.rename(filedata.path, path.join(newdir+'/' + filename));
                        totalDocument.push({
                            status: true,
                            filename: filename,
                            type: filedata.type,
                            size: filedata.size,
                            publicPath: newdir+'/' + filename
                        });
                   
                }else{
                    
                    _.map(filedata, function(singleimage){

                        filename = Date.now() + '-' + singleimage.name;
                        fs.rename(singleimage.path, path.join(newdir+'/' + filename));
                        totalDocument.push({
                            status: true,
                            filename: filename,
                            type: singleimage.type,
                            size: singleimage.size,
                            publicPath: newdir+'/' + filename
                        });

                    });
                }
                
                callback(null,totalDocument);
            }else{
                callback("Nothing to Upload.",null);
            }
        }
    ], function (err, result) {
        if(err){
            return respe.json(response.errors(err, err.message)); 
        }
        return respe.json(response.success(result, 'Uploaded successfully')); 
    });  

};