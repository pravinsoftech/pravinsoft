-- Drop legacy `course` table and point all foreign keys to `courses`
-- Run this script in your Postgres / Supabase SQL editor after verifying table names.

-- 1. Point upcoming_courses_batch.course_id to courses.id
ALTER TABLE public.upcoming_courses_batch
  DROP CONSTRAINT IF EXISTS upcoming_courses_batch_course_id_fkey,
  ADD CONSTRAINT upcoming_courses_batch_course_id_fkey
    FOREIGN KEY (course_id)
    REFERENCES public.courses(id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT;

-- 2. Repeat the same pattern for any other table that still references `course`
-- Example for an enrolments table (adjust names if different):
-- ALTER TABLE public.enrolments
--   DROP CONSTRAINT IF EXISTS enrolments_course_id_fkey,
--   ADD CONSTRAINT enrolments_course_id_fkey
--     FOREIGN KEY (course_id)
--     REFERENCES public.courses(id)
--     ON UPDATE CASCADE
--     ON DELETE RESTRICT;

-- 3. (Optional) Verify there are no remaining foreign keys to `course`
-- SELECT tc.table_schema,
--        tc.table_name,
--        kcu.column_name
-- FROM information_schema.table_constraints tc
-- JOIN information_schema.key_column_usage kcu
--   ON tc.constraint_name = kcu.constraint_name
-- WHERE tc.constraint_type = 'FOREIGN KEY'
--   AND tc.constraint_schema = 'public'
--   AND tc.constraint_name ILIKE '%course_id%';

-- 4. Finally, drop the old `course` table once all references are moved
DROP TABLE IF EXISTS public.course CASCADE;

