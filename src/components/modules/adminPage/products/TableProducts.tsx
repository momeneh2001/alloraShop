"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {IProduct} from "../../../../../models/Product";

interface ProductTableProps {
    products: IProduct[];
}
const TableProducts: React.FC<ProductTableProps> = ({ products }) => {
    const router = useRouter();

    // const products = [
    //     { _id: "1", name: "Product A", price: 1_200_000, score: 4.5, stock: 25, category: "Electronics" },
    //     { _id: "2", name: "Product B", price: 85000, score: 4.2, stock: 0, category: "Clothing" },
    //     { _id: "3", name: "Product C", price: 99000, score: 3.9, stock: 10, category: "Books" },
    // ];

    return (
        <div className="px-6 py-10">
            <h2 className="relative text-2xl font-medium text-left mt-8 uppercase">
                <span className="absolute top-1/2 left-0 right-0 border-b border-gray-800 shadow-[0_1px_0_0_#711d1c] z-0 w-[95%] mx-auto"></span>
                <span className="bg-white pl-6 relative z-10">Products List</span>
            </h2>

            <div className="mt-10 overflow-x-auto rounded-lg shadow-lg">
                <table className="w-full text-center border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4">ID</th>
                            <th className="py-2 px-4">Name</th>
                            <th className="py-2 px-4">Category</th>
                            <th className="py-2 px-4">Price</th>
                            <th className="py-2 px-4">Score</th>
                            <th className="py-2 px-4">Stock</th>
                            <th className="py-2 px-4">Details</th>
                            <th className="py-2 px-4">Edit</th>
                            <th className="py-2 px-4">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => {
                            const rowColor = product.stock > 0
                                ? "bg-green-100 hover:bg-green-200"
                                : "bg-red-100 hover:bg-red-200";

                            return (
                                <tr key="product._id" className={`transition ${rowColor}`}>
                                    <td className="py-2 px-4">{index + 1}</td>
                                    <td className="py-2 px-4">{product.name}</td>
                                    <td className="py-2 px-4">{product.category}</td>
                                    <td className="py-2 px-4">{product.price.toLocaleString()}</td>
                                    <td className="py-2 px-4">{product.score}</td>
                                    <td
                                        className={`py-2 px-4 font-medium ${product.stock > 0 ? "text-green-600" : "text-red-600"
                                            }`}
                                    >
                                        {product.stock > 0 ? product.stock : "Unavailable"}
                                    </td>
                                    <td className="py-2 px-4">
                                        <button className="bg-black text-white text-sm px-3 py-1 rounded w-full hover:bg-gray-800 transition">
                                            Details
                                        </button>
                                    </td>
                                    <td className="py-2 px-4">
                                        <button className="bg-yellow-500 text-white text-sm px-3 py-1 rounded w-full hover:bg-yellow-600 transition">
                                            Edit
                                        </button>
                                    </td>
                                    <td className="py-2 px-4">
                                        <button className="bg-red-600 text-white text-sm px-3 py-1 rounded w-full hover:bg-red-500 transition">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableProducts;