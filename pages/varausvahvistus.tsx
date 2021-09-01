import { useRouter } from "next/router";

export default function BookingConfirmed(props: any) {
  const router = useRouter()
  const { date, time } = router.query
  console.log('date', date)
  return (
    <div className="container">
      <div className="prose">
        <h1>Teille on varattu aika</h1>
        <ul>
          <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg" role="alert">
            {new Date(Number(date)).toLocaleDateString('fi-FI')} klo {time}
          </div>
        </ul>
        <div>
          <h2>Tervetuloa!</h2>
        </div>

      </div>
    </div>
  );
}
