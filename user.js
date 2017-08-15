var mongoose = require('mongoose');

//User Schema
var userSchema = {
    email: { type: String, unique: true, lowercase: true },
    password: { type: String, select: false },
    displayName: String,
    location: String,
    website: String,
    picture: String,
    book: String,
    favdesigner:String,
    //picture:[{type:String,match:/^http:\/\//i}],
    font: { type : Array, default: [] },
    color: { type : Array, default : [] },
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    projects: { type: Number, default: 0 },
    status: {
        type: String, default: 'To be or not to be, this is my awesome motto!'
    },
    jobDescription: {
        type: String, default: 'I m a creative geek from DesignerFav.I enjoy creating eye candy solutions for web and mobile app'
    },

    bitbucket: String,
    facebook: String,
    foursquare: String,
    google: String,
    github: String,
    instagram: String,
    linkedin: String,
    live: String,
    yahoo: String,
    twitter: String,
    behance: { type: String, lowercase: true },
    spotify: String,
    dribble: { type: String, lowercase: true },
    created_by: String,
    created_at: { type: Date, default: Date.now },
    updated_by: String,
    updated_at: { type: Date, default: Date.now },
    loggedInCount: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
    mobile: String,
    birthday: Date,
    designation: { type: String }
    //want to link other schema first import that schema with require and link like below
   // ,complextype:ComplexTypeSchema
};


module.exports = new mongoose.Schema(userSchema);
module.exports.userSchema = userSchema;