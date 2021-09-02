import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export default function Field(props: any) {
  const { fieldName, fieldLabel, required, type } = props;
  const { register, formState } = useFormContext()

  return (
    <div className="mb-2">
      <div>
        <label>{fieldLabel} {required ? '*' : ''} </label>
      </div>
      <div>
        <input type={type}
          className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register(fieldName)} />
        <div className="text-red-500">
          <ErrorMessage errors={formState.errors} name={fieldName} />
        </div>
      </div>
    </div>
  )
}
