import React from "react";
import { observer, inject } from 'mobx-react'
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Field from "./Field";
import ConfirmBookingModal from "./ConfirmBookingModal";
import router from 'next/router'
import { Booking } from "../../types/Booking";
import NProgress from 'nprogress';
import * as yup from "yup";
import "yup-phone";

import { PhaseBackButton } from "./PhaseBackButton";

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
    <div className="sm:w-3/4 lg:w-2/5 flex flex-col">
      <div className="pb-4">
        <PhaseBackButton onClick={() => store.setBookingPhase(Booking.BookingPhase.SELECT_TIME)} />
      </div>

      <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg" role="alert">
        <h2> {store.selectedDate.toLocaleDateString('fi-FI')} klo {store.selectedTime} </h2>
      </div>
      <div className="mt-4 mb-4">
        <h2>Yhteystiedot</h2>
      </div>

      <FormProvider {...methods}>
        <form id="form-booking" onSubmit={handleSubmit(onSubmit)}>
          <Field fieldName="firstName" fieldLabel="Etunimi" required />
          <Field fieldName="lastName" fieldLabel="Sukunimi" required />
          <Field fieldName="email" fieldLabel="Sähköposti" required />
          <Field fieldName="phoneNumber" fieldLabel="Puhelin" required />

          <button
            type="button"
            onClick={async () => {
              const result = await trigger();
              if (result)
                store.setModalIsOpen(true)

            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right">
            Siirry vahvistamaan varaus
          </button>
          <ConfirmBookingModal />
        </form>

      </FormProvider>
    </div>

  );
}))

export default BookingForm