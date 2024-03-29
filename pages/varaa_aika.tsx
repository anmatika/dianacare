import { supabase } from '../supabaseClient';
import Booking from '../components/Booking';

export default function CalendarPage(props: any) {
  const { appointments } = props

  return (
    <div className="container">
      <div className="prose p-8">
        <h1>Ajanvaraus</h1>
      </div>
      <Booking appointments={appointments} />
    </div>
  );
}
export async function getStaticProps() {
  const { data, error } = await supabase
    .from('appointments')
    .select()

  if (!data) return {
    props: { }
  }

  return {
    props: {
      appointments: data?.map((a: any) => {
        return {
          id: a.id,
          userId: a.userid,
          startDate: JSON.stringify(a.startdate),
          startTime: a.starttime,
          endDate: JSON.stringify(a.enddate),
          endTime: a.endtime,
        }
      })
    },
  };
}

