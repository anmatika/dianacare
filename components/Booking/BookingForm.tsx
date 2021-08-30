import React from "react";
import { observer, inject } from 'mobx-react'
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Field from "./Field";
import ConfirmBookingModal from "./ConfirmBookingModal";
import router from 'next/router'
import NProgress from 'nprogress';
import { Booking } from "../../types/Booking";
import * as yup from "yup";
import "yup-phone";

import { ArrowLeftIcon } from '@heroicons/react/outline';

const schema = yup.object().shape({
  firstName: yup.string().required('Tämä tieto on pakollinen.'),
  lastName: yup.string().required('Tämä tieto on pakollinen.'),
  phoneNumber: yup.string()
    // .phone(undefined, false, 'Puhelinnumero ei kelpaa.')
    .required('Tämä tieto on pakollinen.'),
  email: yup.string().email('Sähköpostiosoite ei kelpaa').required('Tämä tieto on pakollinen.'),
});

const BookingForm = inject('store')(observer((props: any) => {
  const { store } = props

  const methods = useForm({ mode: 'onBlur', resolver: yupResolver(schema) })
  const { handleSubmit, trigger, formState } = methods;

  const onSubmit = async (data: any) => {
    NProgress.start()
    console.log('submit date', store.selectedDate, store.selectedTime)
    console.log('submit user', data)
    console.log('field errors', formState.errors)

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

  console.log(methods.watch()); // watch input value by passing the name of it

  if (store.selectedDate == null || store.selectedTime == null) return <div />

  return (
    <div>
      <button onClick={() => store.setBookingPhase(Booking.BookingPhase.SELECT_TIME)}>
        <ArrowLeftIcon className="h-5 w-5 text-blue-500" />
      </button>
      <h2>Yhteystietosi</h2>
      <h2> {store.selectedDate.toLocaleDateString('fi-FI')} klo {store.selectedTime} </h2>

      <FormProvider {...methods}>
        <form id="form-booking" onSubmit={handleSubmit(onSubmit)}>
          <Field fieldName="firstName" fieldLabel="Etunimi" required={true} />
          <Field fieldName="lastName" fieldLabel="Sukunimi" required={true} />
          <Field fieldName="email" fieldLabel="Sähköposti" required={true} />
          <Field fieldName="phoneNumber" fieldLabel="Puhelin" />

          <button
            type="button"
            onClick={async () => {
              const result = await trigger();
              if (result)
                store.setModalIsOpen(true)

            }}
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