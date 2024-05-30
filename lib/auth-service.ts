import { currentUser } from "@clerk/nextjs/server";

import { db } from "./db";

export const getSelf = async () => {
 const self = await currentUser();

 if (!self || !self.username) {
  throw new Error("Unautharized");
 }

 const user = await db.user.findUnique({ where: { externalUserId: self.id } });

 if(!user) {
  throw new Error("Not found");
 }

 return user
};

export const getSelfByUsername = async (username:string) => {

  const self = await currentUser()

  if(!self || self.username) {
    throw new Error("Unautherized")
  }

  const user = await db.user.findUnique({
    where: {
      username
    }
  })

  if(!user) {
    throw new Error("User Not found")
  }

  if(user.username !== self.username) {
    throw new Error("Unautherized")
  }

  return user
}
