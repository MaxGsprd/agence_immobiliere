const Advertisement = require('../models').Advertisement;


exports.list_advertisement = (req, res, next) =>{
  Advertisement.findAll({})
  .then( advertisements => res.status(200).json(advertisements))
  .catch( err => console.log(err))
}

exports.detail_advertisement = (req, res, next) =>{
  const id = req.params.id;
  Advertisement.findByPk(id)
  .then( advertisement => res.status(200).json(advertisement))
  .catch( err => console.log(err))
}

exports.add_advertisement = (req, res, next) =>{
  const advertisement = req.body;
  Advertisement.create(advertisement)
  .then( advertisementCreated => res.status(201).json(advertisementCreated))
  .catch( err => console.log(err))
}

exports.edit_advertisement = (req, res, next) =>{
  const id = req.params.id;
  const advertisement = req.body;
  Advertisement.update(advertisement, {
    where:{
      id: id
    }
  })
  .then( advertisementEdited => res.status(201).json(advertisementEdited))
  .catch( err => console.log(err))
}

exports.delete_advertisement = (req, res, next) =>{
  const id = req.params.id;
  Advertisement.destroy({
    where:{
      id: id
    }
  })
  .then( advertisementDeleted => res.status(200).json({message:`Advertisement Deleted ${advertisementDeleted}`}))
  .catch( err => console.log(err))
}