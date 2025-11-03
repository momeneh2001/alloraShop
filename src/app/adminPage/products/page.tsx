import ProductTable from '@/components/modules/adminPage/products/TableProducts'
import React from 'react'
import connectToDB from '../../../../configs/db';
import ProductModel from "../../../../models/Product";
import AddProduct from '@/components/modules/adminPage/products/AddProduct';

const page = async () => {
  connectToDB();
  const products = await ProductModel.find({}).sort({ _id: -1 }).lean()


  return (
    <main>

      <AddProduct />

      {products.length === 0 ? (
        <p className="bg-red-600 text-white text-3xl font-bold text-center mt-12 py-4 rounded-lg shadow-lg">
          NO Products
        </p>
      ) : (
      <ProductTable
        products={JSON.parse(JSON.stringify(products))}
      />
      )}
    </main>
  )
}

export default page