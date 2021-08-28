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
          <li>{new Date(Number(date)).toLocaleDateString('fi-FI')} klo {time} </li>
        </ul>
        <div>
          Tervetuloa!
        </div>

      </div>
    </div>
  );
}
