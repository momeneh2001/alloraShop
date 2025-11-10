import DiscountTable from "../../../components/modules/adminPage/discounts/DiscountTable";
// import Layout from "@/components/layouts/AdminPanelLayout";
// import styles from "@/components/templates/p-admin/discounts/table.module.css";
// import connectToDB from "@/configs/db";
// import DiscountModel from "@/models/Discount";
import AddDiscount from "../../../components/modules/adminPage/discounts/AddDiscount";

const Discounts = async () => {
    //   connectToDB();
    //   const discounts = await DiscountModel.find({}).sort({ _id: -1 }).lean();

    return (
        <main>
 

            <AddDiscount />
            {/* <p className="bg-red-600 text-white text-3xl font-bold text-center mt-12 py-4 rounded-lg shadow-lg">
                NO Discount
            </p> */}
            {/* {discounts.length === 0 ? ( */}
            {/* <p className=''>کد تخفیفی وجود ندارد</p> */}
            {/* ) : ( */}
            <DiscountTable />
            {/* )} */}
        </main>
    );
};

export default Discounts;
