import Navbar from '@/components/modules/navbar/Navbar'
import Footer from '@/components/modules/footer/Footer'
import ProductInfo from '@/components/template/product/ProductInfo'
import CommentForm from '@/components/template/product/CommentForm'
import Comment from '@/components/template/product/Comment'
import MoreProducts from '@/components/template/product/MoreProducts'
import Gallery from '@/components/template/product/Gallery'
import { authUser } from '@/utiles/authUser'
import productModel from '../../../../models/Product'
import connectToDB from '../../../../configs/db'
// import commentModel from '../../../../models/Comment' 

type ProductPageProps = {
  params: {
    id: string;
  };
};
interface IComment {
  _id: string;
  username: string;
  body: string;
  score: number;
  date: string;
  isAccept: boolean;
}


const Product = async ({ params }: ProductPageProps) => {
  connectToDB()
  const user = await authUser()
  
  const productID = params.id;
  const product = await productModel.findOne({ _id: productID }).populate("comments");
 
  const productData = JSON.parse(JSON.stringify(product))
  const acceptedComments = productData.comments?.filter(
    (comment: IComment) => comment.isAccept === true
  );

  return (
    <>
      <Navbar isLogin={!!user} />
      <section className='container mb-48'>
        <div className=' mt-24 flex gap-16'>
          <Gallery images={productData.images} />
          <ProductInfo product={JSON.parse(JSON.stringify(product))} />
        </div>
      </section>

      <section className="container mb-24 ">
        <h2 className="text-2xl font-semibold mb-6 border-t pt-24">Customer Reviews</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-b pb-24">
          {/* Left Column: Comment Form */}
          <div>
            <h3 className="text-xl font-medium mb-4">Write a Review</h3>
            <CommentForm productID={productData._id} user={user} />
          </div>

          {/* Right Column: Comments List */}
          <div>
            <h3 className="text-xl font-medium mb-4">What Others Are Saying</h3>

            {acceptedComments && acceptedComments.length > 0 ? (
              acceptedComments.map((comment: IComment) => (
                <Comment
                  key={comment._id}
                  {...comment}
                />
              ))
            ) : (
              <div className="bg-gray-50 border border-gray-200 text-gray-500 py-6 px-4 rounded-lg text-center text-sm sm:text-base">
                <p className="font-medium text-gray-600 mb-1">No comments yet</p>
                <p className="text-gray-400">Be the first to share your thoughts about this product!</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <MoreProducts />
      <Footer />
    </>
  )
}

export default Product