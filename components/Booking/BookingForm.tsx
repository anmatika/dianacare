import React from "react";
import { observer, inject } from 'mobx-react'
import { useForm } from "react-hook-form";

const BookingForm = inject('store')(observer((props: any) => {
  const { appointments, store } = props

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    console.log('submit date', store.selectedDate, store.selectedTime)
    console.log('submit user', data)
    const req = {
      user: data,
      appointment: {
        date: store.selectedDate,
        time: store.selectedTime
      }
    }
    fetch('api/createAppointment', {
      method: 'POST',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json'
      },
    })
  };

  // console.log(watch()); // watch input value by passing the name of it

  if (store.selectedDate == null) return <div />

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Etunimi" defaultValue="" {...register("firstName")} />

      <input placeholder="Sukunimi" {...register("surName", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}))

export default BookingForm