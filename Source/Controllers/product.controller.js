const ProductModel = require('../Models/product.model.js');

const getProducts = async (req, res) => {
  try {
    const ProductModels = await ProductModel.find({});
    res.status(200).json(ProductModels);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const Product = await ProductModel.findById(id);
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postProduct = async (req, res) => {
  try {
    const Product = await ProductModel.create(req.body);
    res.status(200).json(Product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const UpdateById = async (req, res) => {
  try {
    const { id } = req.params;

    const ProductModelById = await ProductModel.findByIdAndUpdate(id, req.body);

    if (!ProductModelById) {
      return res.status(404).json({ message: "ProductModel Not Found" });
    }
    const updatedProductModel = await ProductModel.findById(id);
    res.status(200).json(updatedProductModel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const DeletedById = async (req, res) => {
  try {
    const { id } = req.params;

    const Product = await ProductModel.findByIdAndDelete(id, req.body);

    if (!Product) {
      return res.status(404).json({ message: "ProductModel not found" });
    }
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get all ProductModels for order price limit 50.
const SelectByPriceOrder = async (req, res) => {
  try {
    const ProductModelOrder = await ProductModel.find({}).sort({ price:1 }).limit(50);
    
    if (!ProductModelOrder.length){
      return res.status(404).json({message: "Not Found"});
    }
    res.status(200).json(ProductModelOrder);
  
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  UpdateById,
  DeletedById,
  SelectByPriceOrder
};

