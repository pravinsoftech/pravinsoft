export type TrainingNature = 'online' | 'offline' | 'classroom' | 'hybrid';

export type BatchStatus = 'live' | 'closed' | 'cancelled';

export interface Course {
  id: string;
  name: string;
  slug: string | null;
  description: string | null;
  price_display: string | null;
  status: string;
}

export interface Faculty {
  id: string;
  name: string;
  mobile: string | null;
  email: string | null;
  educational_qualification: string | null;
  certification: string | null;
  experience: string | null;
}

export interface UpcomingBatchRow {
  id: string;
  training_nature: string;
  course_id: string;
  start_date: string;
  start_time: string | null;
  enrolled_students: number;
  demo_link: string | null;
  registration_link: string | null;
  payment_link: string | null;
  faculty_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  course: Course | null;
  faculty: Faculty | null;
}
