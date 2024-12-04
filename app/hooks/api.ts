import client from "@/lib/prisma";

export async function getUser(id: string) {
  try {
    const user = await client.user.findFirst({
      where: {
        id: id,
      },
    });
    if (user) return user;

    throw new Error("user not found");
  } catch (error) {
    throw new Error(error);
  }
}
