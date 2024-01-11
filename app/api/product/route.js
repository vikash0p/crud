import Product from "@/mongoose/models/ProductSchema";
import mongodbConnection from "@/mongoose/mongodbConnection";
import { NextResponse } from "next/server";

export async function POST(request) {
  
    try {
        const { name, company, price, colors,image,category,isFeatured } = await request.json()
        await mongodbConnection();

        const product = await Product.create({ name, company, price, colors, image, category, isFeatured });

        return NextResponse.json({
            message: 'student post successfully !',
            success: true,
            data: product,
        }, {
            status: 200
        })



    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'Internal Server Error',
            success: false,
            error: error.message,
        }, {
            status: 500
        })

    }

}

export async function GET(request) {
    try {
        await mongodbConnection();
        const product = await Product.find().limit(500);
        return NextResponse.json(product);

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'Internal Server Error',
            success: false,
            error: error.message,
        }, {
            status: 500
        })

    }
}