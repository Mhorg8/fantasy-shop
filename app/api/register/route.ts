import client from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { validatePassword } from "@/app/hooks/validatePassword";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, email, password, confirmPassword } = body;

    if (!username || !email || !password || !confirmPassword) {
      return NextResponse.json(
        {
          message: "credentials not provided, please fill all input fields",
        },
        { status: 500 }
      );
    }

    const isExist = await client.user.findUnique({
      where: {
        email: email as string,
      },
    });
    if (isExist) {
      return NextResponse.json(
        {
          message: "email already have been used, Please try another email",
        },
        { status: 409 }
      );
    }

    const validPassword = await validatePassword(password, confirmPassword);

    const newUser = await client.user.create({
      data: {
        email: email as string,
        username: username as string,
        password: validPassword as string,
      },
    });

    if (newUser) {
      return NextResponse.json({
        message: "User created successfully",
        user: newUser,
      });
    }
  } catch (error) {
    return NextResponse.json({ message: "message", error }, { status: 500 });
  }
}

interface UpdateReq {
  id: string;
  email?: string | null;
  username?: string | null;
  password?: string | null;
  // postCode?: string | null;
  // address?: string | null;
  phoneNumber?: string | null;
}

export async function PUT(req: NextRequest) {
  try {
    const { id, ...fields }: UpdateReq = await req.json();

    if (!id) {
      return NextResponse.json(
        { message: "User ID is required for updating." },
        { status: 400 }
      );
    }

    // Fetch the existing user record
    const existingUser = await client.user.findUnique({
      where: { id },
    });

    if (!existingUser) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    // Filter only valid and non-empty values
    const updateData = Object.fromEntries(
      Object.entries(fields).filter(
        ([_, value]) => value != null && value !== ""
      )
    );

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { message: "No valid fields provided for update." },
        { status: 400 }
      );
    }

    // Perform the update
    const updatedUser = await client.user.update({
      where: { id },
      data: updateData,
    });

    // Fetch all users for response (optional)
    const allUsers = await client.user.findMany();

    return NextResponse.json({
      message: "User updated successfully.",
      user: updatedUser,
      allUser: allUsers,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred during the update.", error },
      { status: 500 }
    );
  }
}
