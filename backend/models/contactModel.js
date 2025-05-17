const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    image: {
        type: String,
        default: 'https://www.w3schools.com/howto/img_avatar.png',
    },

    name: {
        type: String,
        required: [true, 'Please provide a name'],
        unique: [true, 'This contact already exists'],
    },

    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: [true, 'This email already exists'],
    },

    phone: {
        type: String,
        required: [true, 'Please provide a phone number'],
        unique: [true, 'This phone number already exists'],
    },

},{timestamps: true});

contactSchema.pre('save', async function (next) {

    // remove spaces from name
    this.name = this.name.replace(/\s+/g, '');
    next();
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;

