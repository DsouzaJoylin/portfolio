export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  gradient: string;
  emoji: string;
}

export const projects: Project[] = [
  {
    id: 'votehub',
    name: 'VoteHub',
    tagline: 'Secure Online Voting System',
    description:
      'A full-stack secure online voting platform with OTP authentication, role-based access control, and real-time election analytics. Built for integrity, transparency, and a seamless voter experience.',
    features: [
      'OTP Authentication',
      'Role-Based Access',
      'Real-time Voting',
      'Election Analytics',
      'Admin Dashboard',
      'Secure Login',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/joylin-dsouza/votehub',
    demo: '#',
    featured: true,
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    emoji: '🗳️',
  },
  {
    id: 'car-connect',
    name: 'Car Connect',
    tagline: 'Smart Vehicle Service Platform',
    description:
      'A smart vehicle service platform connecting car owners with garages. Features vehicle management, garage booking, maintenance reminders, and Google Maps integration with real-time notifications.',
    features: [
      'Vehicle Management',
      'Garage Booking',
      'Maintenance Reminder',
      'Google Maps',
      'Firebase',
      'Notifications',
    ],
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Dart'],
    github: 'https://github.com/joylin-dsouza/car-connect',
    demo: '#',
    featured: true,
    gradient: 'from-sky-500 via-indigo-500 to-purple-500',
    emoji: '🚗',
  },
  {
    id: 'job-portal',
    name: 'Job Portal',
    tagline: 'Job Search & Recruitment Platform',
    description:
      'A job portal with authentication, resume upload, and an employer dashboard for managing job postings and applications.',
    features: ['Authentication', 'Resume Upload', 'Employer Dashboard', 'Job Search'],
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/joylin-dsouza/job-portal',
    demo: '#',
    featured: false,
    gradient: 'from-emerald-500 to-teal-500',
    emoji: '💼',
  },
  {
    id: 'email-spam',
    name: 'Email Spam Detection',
    tagline: 'ML-Powered Spam Classifier',
    description:
      'A machine learning model that classifies emails as spam or ham using NLP techniques and scikit-learn, achieving high accuracy on real-world datasets.',
    features: ['NLP Preprocessing', 'TF-IDF Vectorization', 'Model Training', 'Accuracy Metrics'],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/joylin-dsouza/email-spam-detection',
    demo: '#',
    featured: false,
    gradient: 'from-rose-500 to-pink-500',
    emoji: '📧',
  },
  {
    id: 'student-mgmt',
    name: 'Student Management System',
    tagline: 'CRUD Student Records App',
    description:
      'A student management system with full CRUD operations for managing student records, grades, and attendance efficiently.',
    features: ['CRUD Operations', 'Search & Filter', 'Attendance Tracking', 'Grade Management'],
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/joylin-dsouza/student-management',
    demo: '#',
    featured: false,
    gradient: 'from-violet-500 to-fuchsia-500',
    emoji: '🎓',
  },
];
