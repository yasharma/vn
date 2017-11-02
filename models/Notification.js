'use strict';


const 
    mongoose        = require('mongoose'),
    path            = require('path'),
    config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
    Schema          = mongoose.Schema,
    ObjectId 		= Schema.ObjectId;

var NotificationSchema 	= new Schema({  
	
    title: {
        type: String,  
        required: 'Title is required.',     
    },
    description: {
        type: String
    },
    from_user_id: {
        type: ObjectId,
    },
    from_hotel: {
        type: ObjectId,        
    },
    to_users: {
        type: Array,        
    },
    to_departments: {
        type: Array,        
    },
    type: {
        type: String,        
    },
    read_status: {
        type: Array,        
    },   
    
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    },
});


/*NotificationSchema.pre('save', function(next) {
    let alert = this;
    if (this.isModified('user_id') || this.isModified('from_hotel')  || this.isNew) {
        alert.user_id 	    = mongoose.Types.ObjectId(alert.user_id);
        alert.from_hotel 	= mongoose.Types.ObjectId(alert.from_hotel);
        next();
    }else{
      return next();
    }
});*/

NotificationSchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('Notification', NotificationSchema);
