'use strict';

const 
    mongoose        = require('mongoose'),
    path            = require('path'),
    config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
    Schema          = mongoose.Schema,
    ObjectId 		= Schema.ObjectId;

var MeetingRoomSchema 	= new Schema({
  
	hotel_id: {
        type: ObjectId,
    },
    name: {
        type: String,
        required: 'Room name is required.',
    },
    room_image: {
        type: String,        
    },
    room_number: {
        type     : String, 
        required : 'Room number is required.',       
        unique: true      
    },
    dimension:{
        type: String
    },
    capacity:{
        type: Number
    },
    cost:{
        type: Number
    },
    facilities:{
        type: Array,
    },
    room_layout:{
        type: String 
    },
    status:{
        type: String,
        enum: ['available','booked'],
        default: 'available'
    },
    reserved:{
            from: Number,
            to: Number
        }
    
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    },
});


MeetingRoomSchema.pre('save', function(next) {
    let room = this;
    if (this.isModified('user_id') || this.isModified('hotel_id')  || this.isNew) {
        room.user_id 	= mongoose.Types.ObjectId(room.user_id);
        room.hotel_id 	= mongoose.Types.ObjectId(room.hotel_id);
        next();
    }else{
      return next();
    }
});

MeetingRoomSchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('MeetingRoom', MeetingRoomSchema);
