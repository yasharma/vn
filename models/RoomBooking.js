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
    recipient_first_name: {
        type: String,
        required: 'Recipient name is required.',
    },
    recipient_last_name: {
        type: String,
    },
    recipient_email: {
        type: String,        
    },
    user_id: {
        type: ObjectId,        
    },
    recipient_address:{
        type: String
    },
    recipient_contact_number:{
        type: Number,
        required: 'Contact number is required.',
    },
    room_number:{
        type: String,
        required: 'Room number is required.',
    },
    room_layout_id:{
        type: String,
        required: 'Please select room layout.',
    },
    payment:{
        type: String 
    },
    booking_time:{
        type: String 
    },
    status: {
        type: String,
        enum: ['cancelled','booked','modified'],
        default: 'booked'
    },
    staff:{
        type: String 
    },
    description:{
        type: String 
    },
    reserved:{
            from: Number,
            to: Number
        },
    tags:{
        type: Array 
    },
    
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
module.exports = mongoose.model('RoomBooking', MeetingRoomSchema);
