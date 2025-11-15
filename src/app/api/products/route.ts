import { NextResponse } from "next/server";
import connectToDB from "../../../../configs/db";
import ProductModel from "../../../../models/Product";
import { writeFile } from "fs/promises";
import path from "path";

type Variant = {
  colorName: string | null;
  colorHex: string | null;
  size: string | null;
  stock: string | null;
  price: string | null;
};

export async function POST(req: Request) {
  try {
    await connectToDB();

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const stock = parseInt(formData.get("stock") as string);
    const discount = parseInt(formData.get("discount") as string);
    const variants = JSON.parse(formData.get("variants") as string);
    const imgs = formData.getAll("img") as File[];

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 3) {
      return NextResponse.json(
        {
          message:
            "Invalid product name. It must be at least 3 characters long.",
        },
        { status: 400 }
      );
    }
    if (isNaN(price) || price <= 0) {
      return NextResponse.json(
        { message: "Invalid price. It must be a positive number." },
        { status: 400 }
      );
    }
    if (
      !description ||
      typeof description !== "string" ||
      description.trim().length < 10
    ) {
      return NextResponse.json(
        {
          message:
            "Invalid description. It must be at least 10 characters long.",
        },
        { status: 400 }
      );
    }
    if (!category || typeof category !== "string") {
      return NextResponse.json(
        { message: "Invalid category." },
        { status: 400 }
      );
    }
    if (isNaN(stock) || stock < 0) {
      return NextResponse.json(
        { message: "Invalid stock value. It must be a non-negative number." },
        { status: 400 }
      );
    }
    if (isNaN(discount) || discount < 0 || discount > 100) {
      return NextResponse.json(
        { message: "Invalid discount. It must be between 0 and 100." },
        { status: 400 }
      );
    }

    const cleanVariants = variants
      .map((v: Variant) => ({
        color: {
          name: v.colorName || undefined,
          hex: v.colorHex || undefined,
        },
        size: v.size || undefined,
        stock: v.stock ? Number(v.stock) : undefined,
        price: v.price ? Number(v.price) : undefined,
      }))
      .filter(
        (v: {
          color: { name?: string; hex?: string };
          size?: string;
          stock?: number;
          price?: number;
        }) =>
          v.color.name ||
          v.color.hex ||
          v.size ||
          v.stock !== undefined ||
          v.price !== undefined
      );

    if (!imgs.length) {
      return NextResponse.json(
        { message: "At least one product image is required." },
        { status: 400 }
      );
    }

    const imgUrls: string[] = [];

    for (const img of imgs) {
      if (!img.name.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
        return NextResponse.json(
          { message: "Invalid image format" },
          { status: 400 }
        );
      }
      const buffer = Buffer.from(await img.arrayBuffer());
      const filename = Date.now() + "-" + img.name.replace(/\s+/g, "_");
      const imgPath = path.join(process.cwd(), "public/uploads/" + filename);

      await writeFile(imgPath, buffer);

      imgUrls.push(`http://localhost:3000/uploads/${filename}`);
    }

    const product = await ProductModel.create({
      name,
      price,
      description,
      category,
      stock,
      discount,
      variants: cleanVariants,
      images: imgUrls,
    });

    return NextResponse.json(
      { message: "Product created successfully", data: product },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Error creating product:", err);
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDB();

    const products = await ProductModel.find({}, "-__v").populate("comments");

    return NextResponse.json(products, { status: 200 });
  } catch (err: any) {
    console.error("Error fetching products:", err);
    return NextResponse.json(
      { message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
