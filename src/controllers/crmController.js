import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, resp) => {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
        if(err)
            resp.send(err);
            
        resp.json(contact);
    });
};