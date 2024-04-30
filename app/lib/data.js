import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");

    const item_per_page = 5;

    try {
        connectToDB();
        const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({ username: { $regex: regex } }).limit(item_per_page).skip(item_per_page * (page - 1));
        return {count, users};
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching users");
    }
};

export const fetchSingleUser = async (id) => {

    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Error to fetch user!");
    }
};

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");

    const item_per_page = 5;

    try {
        connectToDB();
        const count = await Product.find({ title: { $regex: regex } }).count();
        const products = await Product.find({ title: { $regex: regex } }).limit(item_per_page).skip(item_per_page * (page - 1));
        return {count, products};
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching products!!");
    }
};

export const fetchSingleProduct = async (id) => {

    try {
        connectToDB();
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        console.log(error);
        throw new Error("Error to fetch product!");
    }
};