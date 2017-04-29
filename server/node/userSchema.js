﻿var mongoose = require('mongoose');

module.exports = new mongoose.Schema({

    email: { type: String, unique: true, lowercase: true },
    password: { type: String, select: false },
    displayName: String,
    location: String,
    website: String,
    picture: String,
    font: { type: String, default: 'Gotham , Avenir Next' },
    color: ['red', 'blue'],
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    projects: { type: Number, default: 0 },
    status: {
        type: String, default: 'To be or not to be, this is my awesome motto!'
    },
    jobDescription: {
        type: String, default: 'I m a creative geek from India.I enjoy creating eye candy solutions for web and mobile app'
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
    twitch: String,
    spotify: String,
    dribble: String,
    created_by: String,
    created_at: { type: Date, default: Date.now },
    updated_by: String,
    updated_at: { type: Date, default: Date.now },
    loggedInCount: { type: Number, default: 0 }
});