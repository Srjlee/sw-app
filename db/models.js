import User from "./models/user";


const models = {Favorite , Direction , DiscountCode ,Image, User, Category, PriceHistory, Order, Review, Product,Supplier , OrderProduct , ProductCategory,ProductSupplier};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export default models;
