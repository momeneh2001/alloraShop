import DiscountTable from "../../../components/modules/adminPage/discounts/DiscountTable";
import DiscountModel from "../../../../models/Discount"
import AddDiscount from "../../../components/modules/adminPage/discounts/AddDiscount";
import connectToDB from "../../../../configs/db";

const Discounts = async () => {
    connectToDB();
    const discounts = await DiscountModel.find({}).sort({ _id: -1 }).lean();

    return (
        <main>
            <AddDiscount />

            {discounts.length === 0 ? (
                <p className="bg-red-600 text-white text-3xl font-bold text-center mt-12 py-4 rounded-lg shadow-lg">
                    NO Discount
                </p>
            ) : (
                <DiscountTable 
                    discounts={JSON.parse(JSON.stringify(discounts))}
                />
            )}
        </main>
    );
};

export default Discounts;
