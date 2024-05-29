import { db } from "./db"

export const getUserByuserName = async (username:string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    }
  })

  return user
}