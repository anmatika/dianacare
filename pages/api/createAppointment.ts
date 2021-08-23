/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from "@prisma/client";
import { supabase } from "../../supabaseClient";

const prisma = new PrismaClient();

export default async (req: any, res: any) => {
  const body = req.body;
  console.log('api/createAppointment', body)
  try {
    const createUserRes = await createUser(body.user)
    const createAppointmentRes = await createAppointment(body.appointment, createUserRes.body[0].id)

    res.status(200).json({ ...createUserRes, ...createAppointmentRes });
  } catch (err) {
    console.log(err);
    res.status(403).json({ err: "Error occured while creating an appointment" });
  }
};

async function createUser(user: any) {
  const res = await supabase
    .from('users')
    .upsert({
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      postalCode: user.postalCode,
      city: user.city,
      phoneNumber: user.phoneNumber,
      email: user.email
    }, {
      onConflict: 'email'
    })

  return res
}

async function createAppointment(appointment: any, userId: string) {
  const timeStart = appointment.time.split('-')[0]
  const timeEnd = appointment.time.split('-')[1]
  const date = new Date(appointment.date)

  const res = await supabase
    .from('appointments')
    .insert([
      {
        startDate: new Date(date.getFullYear(), date.getMonth(), date.getDate(), timeStart, 0),
        endDate: new Date(date.getFullYear(), date.getMonth(), date.getDate(), timeEnd, 0),
        userId
      }
    ])

  return res
}