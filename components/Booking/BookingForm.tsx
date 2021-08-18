import React from "react";
import { useForm } from "react-hook-form";

export default function BookingForm(props: any) {
  const { appointments } = props

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log('submit', data);

  // console.log(watch()); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Etunimi" defaultValue="" {...register("firstname")} />

      <input placeholder="Sukunimi" {...register("surname", { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

