import { ArrowLeftIcon } from '@heroicons/react/outline';

export const PhaseBackButton = (props: any) => {
  const { onClick } = props

  return (
    <button onClick={onClick}>
      <ArrowLeftIcon className="h-5 w-5 text-blue-500 hover:text-blue-700" />
    </button>
  )
}
