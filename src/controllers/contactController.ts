import { Request, Response } from 'express';
import Contact from '../models/contactModel';

export const getContacts = async (req: Request, res: Response) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

export const createContact = async (req: Request, res: Response) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).json(contact);
};

export const updateContact = async (req: Request, res: Response) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(contact);
};

export const deleteContact = async (req: Request, res: Response) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted Successfully' });
};
