// Import Model
const Property = require('../models').Property;

/**
 * 
 * List all properties
 */
exports.list_property = (req, res, next) =>{
  Property.findAll({})
  .then( properties => res.status(200).json(properties))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail property
 */
exports.detail_property = (req, res, next) =>{
  const id = req.params.id;
  Property.findByPk(id)
  .then( property => res.status(200).json(property))
  .catch( err => console.log(err))
}

/**
 * Add a property
 */
exports.add_property = (req, res, next) =>{
  const property = req.body;
  Property.create(property)
  .then( propertyCreated => res.status(201).json(propertyCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a property
 */
exports.edit_property = (req, res, next) =>{
  const id = req.params.id;
  const property = req.body;
  Property.update(property, {
    where:{
      id: id
    }
  })
  .then( propertyEdited => res.status(201).json(propertyEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a property
 */
exports.delete_property = (req, res, next) =>{
  const id = req.params.id;
  Property.destroy({
    where:{
      id: id
    }
  })
  .then( propertyDeleted => res.status(200).json({message:`Property Deleted ${propertyDeleted}`}))
  .catch( err => console.log(err))
}