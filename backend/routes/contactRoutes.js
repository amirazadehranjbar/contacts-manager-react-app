const {Router} = require('express');
const Contact = require("../models/contactModel");
const contactRoutes = Router();
const ContactModel = require("../models/contactModel");

//region get all contacts
contactRoutes.get('/contact', async (req, res) => {

    const contacts = await ContactModel.find();

    res.status(200).json(contacts);

});
//endregion

//region add contact
contactRoutes.post('/contact', async (req, res, next) => {
    try {
        const { name, email, phone, image } = req.body;

        if (!name) return next(new Error('name is required'));
        if (!email) return next(new Error('email is required'));
        if (!phone) return next(new Error('phone is required'));

        const contact = new ContactModel({ name, email, phone, image });

        await contact.save();

        return res.status(201).json(contact);
    } catch (err) {
        next(err); // send to errorHandler
    }
});
//endregion

// export
module.exports = contactRoutes;
