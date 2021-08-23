import { useFormContext } from "react-hook-form";

export default function Field(props: any) {

  const { fieldName, fieldLabel, required } = props;
  const { register, formState } = useFormContext()

  return (
    <div className="mb-2">
      <div>
        <label>{fieldLabel}</label>
      </div>
      <div>
        <input className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          defaultValue="" {...register(fieldName, { required })} />
        <div className="text-red-500">
          {formState.errors[fieldName] && <span>Tämä on vaadittu tieto</span>}
        </div>
      </div>
    </div>
  )
}
