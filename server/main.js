import { Meteor } from 'meteor/meteor';
import mathDefalt from "../imports/math";


Meteor.startup(() => {
    console.log("Log from /server/main.js");
    console.log(mathDefalt(12,23));
  // code to run on server at startup
});
