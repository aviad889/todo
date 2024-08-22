const Product = require('./../models/productModel')
const factory = require("./../controllers/factoryHandlers")

//factory function

exports.getProductById = factory.getOne(Product);

exports.getProducts = factory.getAll(Product);

exports.createProduct = factory.createOne(Product);

exports.editProductById = factory.editOne(Product);

exports.deleteProductById = factory.deleteOne(Product)