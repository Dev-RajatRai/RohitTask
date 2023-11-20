import CreateModel from '../Models/Create.js';

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({ message: 'Name is required' });
    }
    const existingCategory = await CreateModel.findOne({ name });
    if (existingCategory) {
      return res.status(409).send({
        message: 'Category is already existing',
      });
    }
    const category = await new CreateModel({ name }).save();
    res.status(201).send({
      success: true,
      message: 'Category created successfully',
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in creating Category',
      error: error,
    });
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    const { id, name } = req.params;
    const existingCategory = await CreateModel.findByIdAndUpdate(
      id,
      {
        name: name,
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      message: 'Category updated successfully',
      category: existingCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in updating Category',
      error: error,
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const categoryId = req.params.id;
    if (!categoryId) {
      return res.status(400).send({ message: 'Category ID is required' });
    }

    // Check if the category exists
    const existingCategory = await CreateModel.findByIdAndDelete(categoryId);

    // if (!existingCategory) {
    //   return res.status(404).send({ message: 'Category not found' });
    // }

    // // Delete the category
    // await existingCategory.remove();

    res.status(200).send({
      success: true,
      message: 'Category deleted successfully',
      category: existingCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in deleting Category',
      error: error,
    });
  }
};
