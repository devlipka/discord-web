import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { Profile } from "@prisma/client";

export const currentProfile = async (): Promise<Profile> => {
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  return await db.profile.findUnique({
    where: {
      userId,
    },
  });
};
