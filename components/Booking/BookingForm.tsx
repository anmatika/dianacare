import React from "react";
import { observer, inject } from 'mobx-react'
import { FormProvider, useForm } from "react-hook-form";
import Field from "./Field";
import ConfirmBookingModal from "./ConfirmBookingModal";
import router from 'next/router'
import NProgress from 'nprogress';

const BookingForm = inject('store')(observer((props: any) => {
  const { store } = props

  const methods = useForm()
  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    NProgress.start()
    console.log('submit date', store.selectedDate, store.selectedTime)
    console.log('submit user', data)

    store.setModalIsOpen(false)
    store.setLoading({
      isLoading: true,
      text: 'Varataan aikaa...'
    })


    const req = {
      user: data,
      appointment: {
        date: {
          year: store.selectedDate.getFullYear(),
          month: store.selectedDate.getMonth(),
          date: store.selectedDate.getDate()
        },
        time: store.selectedTime
      }
    }
    const res = await fetch('api/createAppointment', {
      method: 'POST',
      body: JSON.stringify(req),
      headers: {
        'Content-Type': 'application/json'
      },
    })

    if (res.status === 200) {
      router.push({ pathname: '/varausvahvistus', query: { date: store.selectedDate.getTime(), time: store.selectedTime } });
    }

  };

  // console.log(watch()); // watch input value by passing the name of it

  if (store.selectedDate == null || store.selectedTime == null) return <div />

  return (
    <div>
      <h2>Yhteystietosi</h2>
      <FormProvider {...methods}>
        <form id="form-booking" onSubmit={handleSubmit(onSubmit)}>
          <Field fieldName="firstName" fieldLabel="Etunimi" required={true} />
          <Field fieldName="lastName" fieldLabel="Sukunimi" required={true} />
          <Field fieldName="email" fieldLabel="Sähköposti" required={true} />
          <Field fieldName="phoneNumber" fieldLabel="Puhelin" />
          <Field fieldName="address" fieldLabel="Osoite" />
          <Field fieldName="city" fieldLabel="Kaupunki" />
          <Field fieldName="postalCode" fieldLabel="Postinumero" />

          <button
            type="button"
            onClick={() => store.setModalIsOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Siirry vahvistamaan varaus
          </button>
          <ConfirmBookingModal />
        </form>
      </FormProvider>
    </div>

  );
}))

export default BookingForm