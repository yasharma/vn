/* 
* Read data from buffer stream, object stream and string stream
* https://github.com/gagle/node-streamifier
*/
'use strict';

var util 			= require('util');
var _ 				= require('lodash');
var path 			= require('path');
var fs 				= require('fs-extra');
var stream 			= require('stream');
var async 			= require('async');
var Thumbnail 		= require('thumbnail');
var config 			= require(path.resolve(`./config/env/${process.env.NODE_ENV}`));
const THUMB_SIZE 	= 300;

var createReadStream = function (object, options) {
	return new MultiStream (object, options);
};

var MultiStream = function (object, options) {
	if (object instanceof Buffer || typeof object === 'string') {
		options = options || {};
		stream.Readable.call(this, {
			highWaterMark: options.highWaterMark,
			encoding: options.encoding
		});
	} else {
		stream.Readable.call(this, { objectMode: true });
	}
	this._object = object;
};

/* Handle buffer files */
var handleFile = function(obj, cb){

	async.waterfall([
		async.apply(readBuffer, obj),
		async.apply(genrateThumbs,obj)
	], function (err, image) {
		cb(err, image);
	});
	
};

/*
* Read files from buffer and move to destination directory using stream
*/
function readBuffer(obj, done) {
	var image = [], original_name, filename, finalPath, outStream, ext, thumbDestination;
	// create destination directory
	checkDirectorySync(path.resolve(obj.destination));
	/* Iterate over the buffer */
	obj.files.forEach(function (file, index) {
	    original_name = _.trimEnd(file.originalname, `.${obj.file_extensions[file.mimetype]}`);
	    filename = `${Date.now()}${index}`;
	    ext = obj.file_extensions[file.mimetype];
	    finalPath = path.join(obj.destination, `${filename}.${ext}`);
	    outStream = fs.createWriteStream(finalPath);
	    createReadStream(file.buffer).pipe(outStream);

	    /* create image array  */
    	image.push({
        	original_name: original_name,
        	name: `${filename}.${ext}`,
        	path: obj.display_path
        });
	});
	
	/* end when stream is finished */    
	outStream.on('finish', function () {
        done(null, image);
    });
}


// Node thumbnail will helps us to generate file thumbs
function genrateThumbs(obj, images, done){
	var source = obj.destination;
	var imageThumb = [],
	destination = `${obj.destination}/thumb`;

	// create thumbs directory
	
	checkDirectorySync(path.resolve(destination));

	
	// generate thumbs
	var thumbnail = new Thumbnail(source, destination); 
	async.each(images, function(image, callback){
		thumbnail.ensureThumbnail(image.name, THUMB_SIZE, null, function (err, filename) {
			imageThumb.push({
				original_name: image.original_name,
				name: image.name,
				path: image.path,
				thumb_path: `${image.path}/`,
				thumb_name: filename
			});
			callback();
		});
	}, function(err){

		done(err, imageThumb);
	});
}

/* Check if directory exists or not 
* if not create directory (synchronously)
*/
function checkDirectorySync(directory) {  
	try {
		
    	fs.statSync(directory);

  	} catch(e) {
  		fs.mkdirSync(directory);
  	}
}

util.inherits(MultiStream, stream.Readable);

MultiStream.prototype._read = function () {
	this.push(this._object);
	this._object = null;
};

var createFileObj = function(files, username){
	let nProfilePic = {};
	if(files.length > 0){
		files.forEach(function (file) {
			nProfilePic.name = file.originalname;
			if( file.fieldname === 'thumb_image' ){
				nProfilePic.absolute_thumb_path =  file.path;
				nProfilePic.thumb_image = `${config.server.HOSTNAME}${config.default_profile_image_path}${username}/thumb/${file.filename}`;
			}
			if( file.fieldname === 'original_image' ){
				// move the file
				fs.renameSync(file.path, `${path.resolve(config.user_profile_image_path)}/${username}/${file.filename}`);
				nProfilePic.original_image = `${config.server.HOSTNAME}${config.default_profile_image_path}${username}/${file.filename}`;
				nProfilePic.absolute_original_image_path = `${path.resolve(config.user_profile_image_path)}/${username}/${file.filename}`;
			}
		});
	}
	return nProfilePic;
};

module.exports = {
	createReadStream :createReadStream,
	handleFile: handleFile,
	createFileObj: createFileObj
};	