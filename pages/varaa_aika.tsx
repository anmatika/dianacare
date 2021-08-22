import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import BookingForm from '../components/Booking/BookingForm';

import { PrismaClient } from "@prisma/client";
import { Booking } from '../components/Booking';

export default function CalendarPage(props: any) {
  console.log('varaa_aika props', props)
  const { appointments } = props

  return (
    <div className="container">
      <div className="prose">
        <h1>Varaa aika</h1>
        <Booking appointments={appointments} />
      </div>
    </div>
  );
}
export async function getStaticProps() {

  // const prisma = new PrismaClient({ log: ['query', 'info', 'warn'] });
  // const appointments = await prisma.appointment.findMany();
  const appointments: any = []

  return {
    props: {
      appointments: appointments.map((a: any) => {
        return {
          ...a,
          startDate: JSON.stringify(a.startDate),
          endDate: JSON.stringify(a.endDate)
        }
      })
    },
  };
}
