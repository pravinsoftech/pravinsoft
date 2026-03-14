require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(url, key);

async function test() {
  console.log('Testing Supabase Connection...');
  const { data: courses, error: e1 } = await supabase.from('courses').select('*').limit(3);
  console.log('courses:', courses, e1?.message);

  const { data: batches, error: e2 } = await supabase.from('upcoming_courses_batch').select('*');
  console.log('batches:', batches, e2?.message);
}
test();
