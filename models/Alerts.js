'use strict';


const 
    mongoose        = require('mongoose'),
    path            = require('path'),
    config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
    Schema          = mongoose.Schema,
    ObjectId 		= Schema.ObjectId;

var AlertSchema 	= new Schema({
  
	user_id: {
        type: ObjectId,
    },
    title: {
        type: String,       
    },
    description: {
        type: String,
         required: 'Description is required.',
    },
    from_hotel: {
        type: ObjectId,        
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


AlertSchema.pre('save', function(next) {
    let alert = this;
    if (this.isModified('user_id') || this.isModified('from_hotel')  || this.isNew) {
        alert.user_id 	= mongoose.Types.ObjectId(alert.user_id);
        alert.from_hotel 	= mongoose.Types.ObjectId(alert.from_hotel);
        next();
    }else{
      return next();
    }
});

AlertSchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('Alert', AlertSchema);
