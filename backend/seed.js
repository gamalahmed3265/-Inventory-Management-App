const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/productModel");
const User = require("./models/userModel");

dotenv.config();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    // Get a user to attach the products to
    const user = await User.findOne();

    if (!user) {
      console.log("No user found! Please register a user first.");
      process.exit(1);
    }

    const userId = user._id;

    const sampleProducts = [
      {
        user: userId,
        name: "MacBook Pro 16-inch",
        sku: "APP-MBP-16",
        category: "Laptops",
        quantity: "15",
        price: "2499.99",
        description: "Apple MacBook Pro 16-inch with M2 Max chip.",
      },
      {
        user: userId,
        name: "Dell XPS 15",
        sku: "DEL-XPS-15",
        category: "Laptops",
        quantity: "22",
        price: "1899.99",
        description:
          "Dell XPS 15 laptop with 4K OLED display and Intel Core i9.",
      },
      {
        user: userId,
        name: "Sony Alpha a7 IV",
        sku: "SON-A7-IV",
        category: "Cameras",
        quantity: "8",
        price: "2498.00",
        description: "Sony Alpha a7 IV mirrorless interchangeable lens camera.",
      },
      {
        user: userId,
        name: "Keychron Q1 Pro",
        sku: "KEY-Q1-PRO",
        category: "Accessories",
        quantity: "50",
        price: "199.00",
        description: "Wireless custom mechanical keyboard.",
      },
      {
        user: userId,
        name: "Logitech MX Master 3S",
        sku: "LOG-MXM-3S",
        category: "Accessories",
        quantity: "100",
        price: "99.99",
        description: "Advanced wireless mouse with fast scrolling.",
      },
    ];

    // Clear existing products for this user (optional) or just insert
    // await Product.deleteMany({ user: userId });

    await Product.insertMany(sampleProducts);
    console.log("Successfully seeded product data!");

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedProducts();
