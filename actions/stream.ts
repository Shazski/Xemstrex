"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Stream } from "@prisma/client";
import { getSelf } from "@/lib/auth-service";

export const updateStream = async (values: Partial<Stream>) => {
 try {
  const self = await getSelf();
  const selfStream = await db.stream.findUnique({
   where: {
    userId: self.id,
   },
  });

  if (!selfStream) {
   throw new Error("Stream not Found");
  }
  const validData = {
   name: values.name,
   isChatEnabled: values.isChatEnabled,
   isChatFollowersOnly: values.isChatFollowersOnly,
   isChatDelayed: values.isChatDelayed,
  };
  const stream = await db.stream.update({
   where: {
    userId: self.id,
   },
   data: {
    ...validData,
   },
  });

  revalidatePath(`/u/${self.username}/chat`);
  revalidatePath(`/u/${self.username}`);
  revalidatePath(`/${self.username}`);

  return stream;

 } catch (error: any) {
  throw new Error("Internal Error");
 }
};
