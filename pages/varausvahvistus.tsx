import { useRouter } from "next/router";
import { client } from "../prismic-configuration"
import Map from "../components/Map";
import { Cms } from "../types/Cms";

export interface BookingConfirmedProps {
  data: Cms.YhteystiedotData
}

export default function BookingConfirmed(props: BookingConfirmedProps) {
  const router = useRouter()
  const { data } = props
  const { date, time } = router.query

  return (
    <div className="container">
      <div className="prose p-8">
        <h1>Teille on varattu aika</h1>
        <ul>
          <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg" role="alert">
            {new Date(Number(date)).toLocaleDateString('fi-FI')} klo {time}
          </div>
        </ul>
        <div>
          <h2>Tervetuloa!</h2>
        </div>
        <Map data={data} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await client.getSingle('yhteystiedot', {})

  return {
    props: {
      data: res.data
    },
  }
}