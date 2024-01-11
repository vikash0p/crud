import Student from "@/mongoose/models/studentSchema";
import mongodbConnection from "@/mongoose/mongodbConnection";
import { NextResponse } from "next/server";



export async function PUT(request, { params }) {
    const { id } = params;
    try {

        const {
            newName: name,
            newEmail: email,
            newGender: gender,
            newMajor: major,
            newAdmissionYear: admissionYear
        } = await request.json();

        await mongodbConnection();

        const newStudent = await Student.findByIdAndUpdate(id, { name, email, gender, major, admissionYear })

        return NextResponse.json({
            message: 'Student data updated successfully !',
            success: true,
            data: newStudent,
        }, {
            status: 200
        })

    } catch (error) {
        console.log(error)

        return NextResponse.json({
            message: 'error some occured in update data!',
            success: false,
            error: error.message
        }, {
            status: 500
        })
    }
}

export async function GET(request, { params }) {
    const { id } = params
    try {
        await mongodbConnection();
        const singleStudentData = await Student.findOne({ _id: id });
        return NextResponse.json({
            message: 'Student data updated successfully !',
            success: true,
            data: singleStudentData,
        }, {
            status: 200
        })

    } catch (error) {
        console.log(error)

        return NextResponse.json({
            message: 'error some occured in get single data!',
            success: false,
            error: error.message
        }, {
            status: 500
        })
    }
}