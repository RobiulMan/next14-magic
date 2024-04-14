"use server";

import connectMongo from "@/dbConnect/connect-mongo";
import User from "@/models/User";
import { revalidatePath } from 'next/cache'

export const addUser = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");

  const userData = {
    name,
    email,
  };

  try {

    await connectMongo();

    //insert into database
    await new User(userData).save();
    revalidatePath('/')
  } catch (err) {
    console.log(err)
  }
};


export const getUser = async () => {
  try {

    await connectMongo();

    //insert into database
    const users = await User.find()

    return users
  } catch (err) {
    console.log(err)
  }
}
