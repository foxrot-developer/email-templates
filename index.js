const express = require('express');
const nodemailer = require('nodemailer');
const ejs = require('ejs');
const solutionSubmitted = require('./data/solution-submit');
const projectCreated = require('./data/project-created');
const wikiCreated = require('./data/wiki-created');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('templates/project-created/project', { project: projectCreated });
});

// Request for sending email to new user
app.get('/send/new-user', (req, res, next) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'usama.bashirb1@gmail.com',
            pass: 'fhtxycqujoghzdkp'
        }
    });

    console.log("Transport ceated");

    ejs.renderFile(__dirname + '/views/templates/new-user/new-user.ejs', { name: 'Usama' }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var mailOptions = {
                from: 'usama.bashirb1@gmail.com',
                to: 'meetmrusama@gmail.com',
                subject: 'subject',
                html: data
            };

            console.log("File rendered");

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                res.send('Sent');
            });
        }
    });
});

// Request for sending email of otp
app.get('/send/otp', (req, res, next) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'usama.bashirb1@gmail.com',
            pass: 'fhtxycqujoghzdkp'
        }
    });

    console.log("Transport ceated");

    ejs.renderFile(__dirname + '/views/templates/otp/otp.ejs', { name: 'Usama' }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var mailOptions = {
                from: 'usama.bashirb1@gmail.com',
                to: 'meetmrusama@gmail.com',
                subject: 'subject',
                html: data
            };

            console.log("File rendered");

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                res.send('Sent');
            });
        }
    });
});

// Request for sending email of reset password
app.get('/send/reset-password', (req, res, next) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'usama.bashirb1@gmail.com',
            pass: 'fhtxycqujoghzdkp'
        }
    });

    console.log("Transport ceated");

    ejs.renderFile(__dirname + '/views/templates/reset-password/reset.ejs', { name: 'Usama', otp: '88765' }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var mailOptions = {
                from: 'usama.bashirb1@gmail.com',
                to: 'meetmrusama@gmail.com',
                subject: 'subject',
                html: data
            };

            console.log("File rendered");

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                res.send('Sent');
            });
        }
    });
});

// Request for sending email of reset success
app.get('/send/reset-success', (req, res, next) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'usama.bashirb1@gmail.com',
            pass: 'fhtxycqujoghzdkp'
        }
    });

    console.log("Transport ceated");

    ejs.renderFile(__dirname + '/views/templates/reset-success/success.ejs', { name: 'Usama' }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var mailOptions = {
                from: 'usama.bashirb1@gmail.com',
                to: 'meetmrusama@gmail.com',
                subject: 'subject',
                html: data
            };

            console.log("File rendered");

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                res.send('Sent');
            });
        }
    });
});

// Request for sending email of new message
app.get('/send/message', (req, res, next) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'usama.bashirb1@gmail.com',
            pass: 'fhtxycqujoghzdkp'
        }
    });

    console.log("Transport ceated");

    ejs.renderFile(__dirname + '/views/templates/new-message/message.ejs', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var mailOptions = {
                from: 'usama.bashirb1@gmail.com',
                to: 'meetmrusama@gmail.com',
                subject: 'subject',
                html: data
            };

            console.log("File rendered");

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                res.send('Sent');
            });
        }
    });
});

// Request for sending email to builders
app.get('/send/builder', (req, res, next) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'usama.bashirb1@gmail.com',
            pass: 'fhtxycqujoghzdkp'
        }
    });

    console.log("Transport ceated");

    ejs.renderFile(__dirname + '/views/templates/builder/builder.ejs', { name: 'Usama' }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var mailOptions = {
                from: 'usama.bashirb1@gmail.com',
                to: 'meetmrusama@gmail.com',
                subject: 'subject',
                html: data
            };

            console.log("File rendered");

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                res.send('Sent');
            });
        }
    });
});

// Request for sending email to builders
app.get('/send/solution', (req, res, next) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'usama.bashirb1@gmail.com',
            pass: 'fhtxycqujoghzdkp'
        }
    });

    console.log("Transport ceated");

    ejs.renderFile(__dirname + '/views/templates/solution-submitted/solution.ejs', { solution: solutionSubmitted }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var mailOptions = {
                from: 'usama.bashirb1@gmail.com',
                to: 'meetmrusama@gmail.com',
                subject: 'subject',
                html: data
            };

            console.log("File rendered");

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                res.send('Sent');
            });
        }
    });
});

// Request for sending email for project created
app.get('/send/project-created', (req, res, next) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'usama.bashirb1@gmail.com',
            pass: 'fhtxycqujoghzdkp'
        }
    });

    console.log("Transport ceated");

    ejs.renderFile(__dirname + '/views/templates/project-created/project.ejs', { project: projectCreated }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var mailOptions = {
                from: 'usama.bashirb1@gmail.com',
                to: 'meetmrusama@gmail.com',
                subject: 'subject',
                html: data
            };

            console.log("File rendered");

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                res.send('Sent');
            });
        }
    });
});

// Request for sending email for project assign
app.get('/send/project-assign', (req, res, next) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'usama.bashirb1@gmail.com',
            pass: 'fhtxycqujoghzdkp'
        }
    });

    console.log("Transport ceated");

    ejs.renderFile(__dirname + '/views/templates/project-assigned/assigned.ejs', { project: projectCreated }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var mailOptions = {
                from: 'usama.bashirb1@gmail.com',
                to: 'meetmrusama@gmail.com',
                subject: 'subject',
                html: data
            };

            console.log("File rendered");

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                res.send('Sent');
            });
        }
    });
});

// Request for sending email for project calcellation
app.get('/send/project-cancel', (req, res, next) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'usama.bashirb1@gmail.com',
            pass: 'fhtxycqujoghzdkp'
        }
    });

    console.log("Transport ceated");

    ejs.renderFile(__dirname + '/views/templates/project-delete/delete.ejs', { project: projectCreated }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var mailOptions = {
                from: 'usama.bashirb1@gmail.com',
                to: 'meetmrusama@gmail.com',
                subject: 'subject',
                html: data
            };

            console.log("File rendered");

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                res.send('Sent');
            });
        }
    });
});

// Request for sending email for wiki created
app.get('/send/wiki-created', (req, res, next) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'usama.bashirb1@gmail.com',
            pass: 'fhtxycqujoghzdkp'
        }
    });

    console.log("Transport ceated");

    ejs.renderFile(__dirname + '/views/templates/wiki-created/wiki.ejs', { wiki: wikiCreated }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var mailOptions = {
                from: 'usama.bashirb1@gmail.com',
                to: 'meetmrusama@gmail.com',
                subject: 'subject',
                html: data
            };

            console.log("File rendered");

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                res.send('Sent');
            });
        }
    });
});

app.listen(process.env.PORT || 5000, () => {
    console.log('Connected');
});