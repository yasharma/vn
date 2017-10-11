'use strict';

const 
    mongoose        = require('mongoose'),
    path            = require('path'),
    config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
    Schema          = mongoose.Schema,
    ObjectId 		= Schema.ObjectId;

var HotelShiftSchema 	= new Schema({

	hotel_id: {
	    type: ObjectId
	},
	shift_name: {
        type: String,
        trim: true,  
        required: 'Shift name is required.'   
    },
    department_name: {
        type: String,
    },
    bgcolor: {
	    type: String,
        default: "#fff"
	},
	start_time: {
	    type: Object	   
	},
    end_time: {
        type: Object
       
    }
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    },
});

HotelShiftSchema.pre('save', function(next) {
    let hotel = this;
    if (this.isModified('hotel_id')  || this.isNew) {
        hotel.hotel_id 	= mongoose.Types.ObjectId(hotel.hotel_id);
        next();
    }else{
      return next();
    }
});

HotelShiftSchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('HotelShift', HotelShiftSchema);
