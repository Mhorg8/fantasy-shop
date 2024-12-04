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
