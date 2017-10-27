"use strict";
const config = {
  db: {
    URL: process.env.MONGODB_URL || `mongodb://${process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost'}/hoteljot_db`,
    DEBUG: true,
    autoIndex: true
  },
  server: {
    PORT: process.env.WEBSITES_PORT || 3000
  },
  /*mail:{
    poolConfig : {
      pool: true,
        host: 'smtp.gmail.com', // Gmail as mail client
        port: 587,
        secure: false, // use SSL
        auth: {
          user: process.env.USERNAME,
          pass: process.env.PASSWORD
        }
    },
    from: ` <${process.env.USERNAME}>`
  },*/
    mailTransporter: 'gmail',
    salt: '51ca5acbce3e6a5b2dd9772b36cff34c',
    secret: '876sdf&%&^435345(*^&^654sdsdc&^&kjsdfjbksdureyy3(&(*&(&7$%^#%#&^*(&)*)*',
    allowed_image_extensions : ['image/jpeg','image/jpg','image/png','image/gif','image/bmp'],
    file_extensions : {
      'image/jpeg' : 'jpg',
      'image/jpg' : 'jpg',
      'image/png' : 'png',
      'image/gif' : 'gif',
      'image/bmp' : 'bmp',
    },
    /*In case no property image found or upload */
    
    
    MAIL_ATTACHMENT_PATH: 'public/images/attachments',
    JOT_ATTACHMENT_IMAGE_PATH: './images/Jotdocument/',
    
    /*In case no property image found or upload */
    JOT_FILE_CONFIG: {
        fileSize: 20971520, //the max file size (in bytes)
        files: 10 //the max number of file
    },

    defaultAdmin: {
      email: 'admin@gmail.com',
      password: process.env.ADMIN_PASSWORD
    },
    DOCLIMIT: 10,
    defaultAdmin: {
      email: 'admin@gmail.com',
      password: '123456',
      role: 'admin',
      status: true
    }
};
module.exports = config;