'use strict';

const 
    mongoose        = require('mongoose'),
    path            = require('path'),
    config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
    Schema          = mongoose.Schema,
    ObjectId 		= Schema.ObjectId;

var MemberScheduleSchema 	= new Schema({
  
	hotel_id: {
        type: ObjectId,
    },
    user_id: {
        type: ObjectId
    },
    shift_date:{
        type: Number
    },
    shift_filter_date:{
        type: String
    },
    department:{
        type: String
    },
    schedule_data:{
        type: Object //('shift_name':'day shift','start_time': '9am','end_time': '5pm','short_note':'i am on leave today.')
    },
    created_by:{
        type: String,
        enum: ['admin','hotel_owner'],
        default: 'admin'
    }
},{
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    },
});


MemberScheduleSchema.pre('save', function(next) {
    let user = this;
    if (this.isModified('user_id') || this.isModified('hotel_id')  || this.isNew) {
        user.user_id 	= mongoose.Types.ObjectId(user.user_id);
        user.hotel_id 	= mongoose.Types.ObjectId(user.hotel_id);
        next();
    }else{
      return next();
    }
});

MemberScheduleSchema.set('autoIndex', config.db.autoIndex);
module.exports = mongoose.model('MemberSchedule', MemberScheduleSchema);
