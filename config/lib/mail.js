
"use strict";

const nodemailer    = require('nodemailer'),
    path             = require('path'),
    config             = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
    fs                 = require('fs'),
    stubTransport     = require('nodemailer-stub-transport'),
    sgTransport     = require('nodemailer-sendgrid-transport'),
    hbs             = require('nodemailer-express-handlebars'),
    exphbs          = require('express-handlebars'),
    handlebars      = require('handlebars'),
    template         = require(path.resolve('./config/lib/template-render'));

/*exphbs.registerHelper({
defaultLayout: 'main', //we will be creating this layout shortly
helpers: {
    if_eq: function (a, b, opts) {
        if (a == b) // Or === depending on your needs
            return opts.fn(this);
        else
            return opts.inverse(this);
    }
}
});*/
/*handlebars.registerHelper("if_eq", function(gender, options) {

  if (gender == 'male') {
    return "M";
  } else {
    return "F";
  }
});*/

/*handlebars.registerHelper('ifeq', (a, b, options) => {
  if (a === b) {
    return options.fn(this);
  }
  return options.inverse(this);
});*/

// Send mail by GMAIL SMTP
function gmailSMTP(opt, cb) {
    var poolConfig = config.mail.poolConfig,
    transporter = nodemailer.createTransport(poolConfig);
    sendMailer(opt, transporter, cb);
}

// Using sendgrid SMTP
function sendgridSMTP(opt, cb) {
    var sendgrid     = config.sendgrid,
    transporter     = nodemailer.createTransport(sgTransport(sendgrid));
    sendMailer(opt, transporter, cb);
    /*if(opt.type ==='withoutHeader'){
             sendMailerWithoutHeader(opt, transporter, cb); 
        }else{
             sendMailer(opt, transporter, cb);
        }*/
}

/* if we are testing don't send out an email instead return
* success and the html strings for inspection
*/
function stubMail(opt, cb) {
    var transporter = nodemailer.createTransport(stubTransport());
    sendMailer(opt, transporter, cb);
}

function sendMailer(opt, transporter, cb) {
    let options = {
            viewEngine: {
                extname: '.hbs',
                layoutsDir: './public/views/email/',
                defaultLayout: 'template',
                partialsDir: './public/views/partials/'
            },
            viewPath: './public/views/email/',
            extName: '.hbs'
        };
    if(opt.type ==='withoutHeader'){
        delete options.viewEngine.defaultLayout;   
      }

    let email_obj = {
        from: opt.from,
        to: opt.to,
        subject: opt.subject,
        template: opt.html,
        context: opt.emailData
    };
    if(opt.cc){
        email_obj.cc = opt.cc ;
    }
    if(opt.attachments){
        email_obj.attachments = opt.attachments;
    }
    transporter.use('compile', hbs(options));
    transporter.sendMail(email_obj, cb);
}

exports.send = function (opt, cb) {
    if (process.env.NODE_ENV === 'test') {
        stubMail(opt, cb);
    } else {
        if (config.mailTransporter === 'sendgrid'){
            sendgridSMTP(opt, cb);
        } else if (config.mailTransporter === 'gmail') {
            gmailSMTP(opt, cb);
        } else {
            cb('Unknown transporter, check your config', null);
        }
    }
};



