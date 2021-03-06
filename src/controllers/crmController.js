import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

const response = (err, data, resp) => {
    if(err)
        resp.send(err);
    
    resp.json(data);

};

export const addNewContact = (req, resp) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => response(err, contact, resp));
};

export const getContacts = (req, resp) => {
    Contact.find({}, (err, contacts) => response(err, contacts, resp));  
};

export const getContactById = (req, resp) => {
    Contact.findById(req.params.contactId, (err, contact) => response(err, contact, resp));

};

export const updateContact = (req, resp) => {
    Contact.findByIdAndUpdate({_id: req.params.contactId}, req.body, { upsert: false, new: true},
        (err, contact) => response(err, contact, resp));

};

export const deleteContact = (req, resp) => {
    Contact.deleteOne({_id: req.params.contactId}, (err) => response(err, 'OK', resp));
};