/* eslint-disable import/no-anonymous-default-export */
import { supabase } from "../../supabaseClient";
import { Rest } from "../../types/Rest";

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

async function createUser(user: Rest.User) {

  const res = await supabase
    .from('users')
    .upsert({
      firstname: user.firstName,
      lastname: user.lastName,
      // address: user.address,
      // postalCode: user.postalCode,
      // city: user.city,
      // phoneNumber: user.phoneNumber,
      email: user.email
    }, {
      onConflict: 'email'
    })

  return res
}

async function createAppointment(appointment: Rest.Appointment, userId: number) {
  const { date, time } = appointment

  const timeStart = time.split('-')[0]
  const timeEnd = time.split('-')[1]

  const res = await supabase
    .from('appointments')
    .insert([
      {
        startdate: new Date(Date.UTC(date.year, date.month, date.date)),
        enddate: new Date(Date.UTC(date.year, date.month, date.date)),
        starttime: timeStart,
        endtime: timeEnd,
        userid: userId
      }
    ])

  return res
}