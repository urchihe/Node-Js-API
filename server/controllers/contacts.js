const Contact = require('../models').Contact;

function load(req, res) {
  Contact.findById(req.params.contactId).then((contact) => {
    if (!contact) {
      res.status(404).json({ error: 'No Contact Created by you found' });
    } else {
      res.status(201).json(contact);
    }
  }).catch((e) => {
    res.status(500).json({ error: e.message });
  });
}
function list(req, res) {
  Contact.findAll({
        where: {
          userId: req.user.id,
        },
      }).then((contact) => {
    if (!contact) {
      res.status(404).json({ error: 'No Contact Created by you found' });
    } else {
      res.status(201).json(contact);
    }
  }).catch((e) => {
    res.status(500).json({ error: e.message });
  });
}

function create(req, res) {
  Contact.create({
      fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        mobile: req.body.mobile,
        address: req.body.address,
        userId: req.user.id, }).then((newContact) => {
    res.status(201).json({ message:'Contact Added successfully', newContact});
  }).catch((e) => {
    res.status(500).json({ error: e.message });
  });
}

function update(req, res, next) {
  Contact.find({
      where:{
        id:req.params.contactId,
        userId:req.user.id,
      },
    })
    .then(contact => {
      if (!contact) {
        return res.status(404).send({
          message: 'Contact Not Found',
        });
      }
      
        contact.update(req.body, { fields: Object.keys(req.body) })
        .then(updatedContact => res.status(200).send({ message:'Updated successfully', updatedContact}))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}
function star(req, res) {
  Contact.find({
        where: {
          id: req.params.contactId,
          userId: req.user.id,
        },
      })
    .then(contact => {
      if (!contact) {
        return res.status(404).send({
          message: 'Contact Not Found',
        });
      }
        contact.update({star:true})
        .then(starContact => res.status(200).send({ message:'Contact Star successfully', starContact,}))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}
function retrieve(req, res) {
    Contact.findById(req.params.contactId)
    .then(contact => {
      if (!contact) {
        return res.status(404).send({
          message: 'Todo Not Found',
        });
      }
      return res.status(200).send(contact);
    })
    .catch(error => res.status(400).send(contact));
}

function remove(req, res) {
    Contact.findOne({
      where:{
        id:req.params.contactId,
        userId:req.user.id,
      },
    })
    .then(contact => {
      if (!contact) {
        return res.status(400).send({
          message: 'Contact Not Found',
        });
      }
         contact.destroy()
        .then(() => {
         return res.status(204).send({ message:'Deleted successfully'})
       })
        
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
}
module.exports = {
  load, create, list, update, retrieve, remove, star,
};