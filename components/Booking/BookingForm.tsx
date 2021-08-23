import React from "react";
import { observer, inject } from 'mobx-react'
import { FormProvider, useForm } from "react-hook-form";
import Field from "./Field";

const BookingForm = inject('store')(observer((props: any) => {
  const { appointments, store } = props

  const methods = useForm()
  const { handleSubmit } = methods;

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

  if (store.selectedDate == null || store.selectedTime == null) return <div />

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field fieldName="firstName" fieldLabel="Etunimi" required={true} />
        <Field fieldName="lastName" fieldLabel="Sukunimi" required={true} />
        <Field fieldName="email" fieldLabel="Sähköposti" required={true} />

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Lähetä
        </button>
      </form>
    </FormProvider>
  );
}))

export default BookingForm