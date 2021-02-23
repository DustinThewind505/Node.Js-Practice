const express = require('express');

const Hubs = require('./hubs-model.js');

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    Hubs.find(req.query)
    .then(hubs => {
      res.status(200).json(hubs);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the hubs',
      });
    });
  });
  
  router.get('/:id', (req, res) => {
    Hubs.findById(req.params.id)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: 'Hub not found' });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the hub',
      });
    });
  });
  
  router.post('/', (req, res) => {
    Hubs.add(req.body)
    .then(hub => {
      res.status(201).json(hub);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error adding the hub',
      });
    });
  });
  
  router.delete('/:id', (req, res) => {
    Hubs.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The hub has been nuked' });
      } else {
        res.status(404).json({ message: 'The hub could not be found' });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error removing the hub',
      });
    });
  });
  
  router.put('/:id', (req, res) => {
    const changes = req.body;
    Hubs.update(req.params.id, changes)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: 'The hub could not be found' });
      }
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error updating the hub',
      });
    });
  });

  router.get('/:id/messages', (req, res) => {

    Hubs.findHubMessages(req.params.id)
    .then(messages => res.status(200).json(messages))
    .catch(err => {
        console.log(err.message);
        res.status(500).json({ errorMessage: "could not access hub's data"})
    }); 

  });

  router.post('/:id/messages', (req, res) => {
    //   const testMessage = {
    //       "text": "Test Test Test",
    //       "sender": "me",
    //       "hub_id":1
    //   }



    Hubs.addMessage(req.body)
    .then(message => res.status(201).json(message))
    .catch(err => {
        console.log(err.message);
        res.status(500).json({ errorMessage: 'coud not add message'})
    })

  })

  module.exports = router;