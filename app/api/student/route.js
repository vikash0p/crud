import Student from "@/mongoose/models/studentSchema";
import mongodbConnection from "@/mongoose/mongodbConnection";
import { NextResponse } from "next/server";

export async function POST(request) {
    console.log("This is all about the requset data", request)
    try {
        const { name, email, gender, major, admissionYear } = await request.json()
        await mongodbConnection();

        const student = await Student.create({ name, email, gender, major, admissionYear });

        return NextResponse.json({
            message: 'student post successfully !',
            success: true,
            data: student,
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
        const student = await Student.find();


        return NextResponse.json({
            message: 'student post successfully !',
            success: true,
            data: student,
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

export async function DELETE(request) {

    try {
        const id = request.nextUrl.searchParams.get("id");
        await mongodbConnection();
        await Student.findByIdAndDelete(id);
        return NextResponse.json({
            message: 'student data delete successfully !',
            success: true,
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            message: 'error some occured delete student data !',
            success: false,
        }, {
            status: 500
        })
    }

}