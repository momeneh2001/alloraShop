"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import swal from "sweetalert";

export default function AddProduct() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [price, setPrice] = useState<number | "">("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [discount, setDiscount] = useState<number | "">("");
    const [stock, setStock] = useState<number | "">("");
    const [variants, setVariants] = useState([
        { colorName: "", colorHex: "", size: "", stock: "", price: "" },
    ]);
    const [images, setImages] = useState<File[]>([]);

    const handleAddVariant = () => {
        setVariants([...variants, { colorName: "", colorHex: "", size: "", stock: "", price: "" }]);
    };

    const handleVariantChange = (index: number, field: string, value: string) => {
        const newVariants = [...variants];
        (newVariants[index] as any)[field] = value;
        setVariants(newVariants);
    };

    const handleSubmit = async () => {

        if (!name || !price || !description || !category || !stock) {
            return swal("Validation Error", "Please fill all required fields.", "error");
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price.toString());
        formData.append("description", description);
        formData.append("category", category);
        formData.append("discount", discount.toString());
        formData.append("stock", stock.toString());
        formData.append("variants", JSON.stringify(variants));

        images.forEach((img) => formData.append("img", img));

        const res = await fetch("/api/products", {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            swal("Success", "Product created successfully!", "success").then(() => {
                setName("");
                setPrice("");
                setDescription("");
                setCategory("");
                setDiscount("");
                setStock("");
                setVariants([{ colorName: "", colorHex: "", size: "", stock: "", price: "" }]);
                setImages([]);
                router.refresh();
            });
        } else {
            swal("Error", "Failed to create the product. Try again.", "error");
        }
    };

    return (
        <section className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Add New Product</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                    type="text"
                    placeholder="Product Name"
                    className="bg-gray-50 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Price"
                    className="bg-gray-50 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                />

                <textarea
                    placeholder="Full Description"
                    className="bg-gray-50 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2 h-28 resize-none"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Category"
                    className="bg-gray-50 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Stock"
                    className="bg-gray-50 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    value={stock}
                    onChange={(e) => setStock(Number(e.target.value))}
                />

                <input
                    type="number"
                    placeholder="Discount (%)"
                    className="bg-gray-50 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    value={discount}
                    onChange={(e) => setDiscount(Number(e.target.value))}
                />

                <div className="md:col-span-2">
                    <label className="block font-semibold text-gray-700 mb-2">Variants:</label>
                    {variants.map((variant, index) => (
                        <div key={index} className="flex flex-wrap gap-3 mb-3 items-center">
                            <input
                                type="text"
                                placeholder="Color Name"
                                className="bg-gray-50 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                                value={variant.colorName}
                                onChange={(e) => handleVariantChange(index, "colorName", e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Color Hex"
                                className="bg-gray-50 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                                value={variant.colorHex}
                                onChange={(e) => handleVariantChange(index, "colorHex", e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Size"
                                className="bg-gray-50 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                                value={variant.size}
                                onChange={(e) => handleVariantChange(index, "size", e.target.value)}
                            />

                            <input
                                type="number"
                                placeholder="Stock"
                                className="bg-gray-50 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                                value={variant.stock}
                                onChange={(e) => handleVariantChange(index, "stock", e.target.value)}
                            />

                            <input
                                type="number"
                                placeholder="Price"
                                className="bg-gray-50 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
                                value={variant.price}
                                onChange={(e) => handleVariantChange(index, "price", e.target.value)}
                            />
                        </div>
                    ))}

                    <button
                        onClick={handleAddVariant}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition duration-150"
                    >
                        + Add Variant
                    </button>
                </div>

                <div className="md:col-span-2">
                    <label className="block font-semibold text-gray-700 mb-2">Product Images:</label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-white p-2"
                        onChange={(e) => e.target.files && setImages(Array.from(e.target.files))}
                    />
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-150 shadow-lg w-full md:w-auto"
                >
                    Submit Product
                </button>
            </div>
        </section>
    );
}
