import { supabase } from '../../../lib/supabaseClient';
import MapClient from '../../components/MapClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;


export default async function MapPage() {
  const { data: stories } = await supabase
    .from('stories')
    .select('*')
    .not('lat', 'is', null);

  return (
    <div>
      <h1 className="page-title">Карта поездок</h1>
      {stories && stories.length > 0 ? (
        <MapClient stories={stories} />
      ) : (
        <div className="placeholder-block">
          Карта пока пуста — добавьте первую поездку в админке
        </div>
      )}
    </div>
  );
}
