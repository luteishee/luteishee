import { supabase } from '../../../lib/supabaseClient';
import MapClient from '../../components/MapClient';

export const dynamic = 'force-dynamic';

export default async function MapPage() {
  const { data: stories } = await supabase
    .from('stories')
    .select('*')
    .not('lat', 'is', null);

  return <MapClient stories={stories || []} />;
}
