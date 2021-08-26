import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import BookingForm from '../components/Booking/BookingForm';
import { supabase } from '../supabaseClient';

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

  const { data, error } = await supabase
    .from('appointments')
    .select()

  if (!data) return {
    props: {}
  }

  return {
    props: {
      appointments: data?.map((a: any) => {
        return {
          id: a.id,
          userId: a.userid,
          startDate: JSON.stringify(a.startdate),
          startTime: a.starttime,
          endDate: JSON.stringify(a.enddate),
          endTime: a.endtime,
        }
      })
    },
  };
}
