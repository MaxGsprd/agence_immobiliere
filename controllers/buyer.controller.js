// Import Model
const Buyer = require('../models').Buyer;

/**
 * 
 * List all buyers
 */
exports.list_buyer = (req, res, next) =>{
  Buyer.findAll({})
  .then( buyers => res.status(200).json(buyers))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail buyer
 */
exports.detail_buyer = (req, res, next) =>{
  const id = req.params.id;
  Buyer.findByPk(id)
  .then( buyer => res.status(200).json(buyer))
  .catch( err => console.log(err))
}

/**
 * Add a buyer
 */
exports.add_buyer = (req, res, next) =>{
  const buyer = req.body;
  Buyer.create(buyer)
  .then( buyerCreated => res.status(201).json(buyerCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a buyer
 */
exports.edit_buyer = (req, res, next) =>{
  const id = req.params.id;
  const buyer = req.body;
  Buyer.update(buyer, {
    where:{
      id: id
    }
  })
  .then( buyerEdited => res.status(201).json(buyerEdited))
  .catch( err => console.log(err))
}

/**
 * Delete a buyer
 */
exports.delete_buyer = (req, res, next) =>{
  const id = req.params.id;
  Buyer.destroy({
    where:{
      id: id
    }
  })
  .then( buyerDeleted => res.status(200).json({message:`Buyer Deleted ${buyerDeleted}`}))
  .catch( err => console.log(err))
}