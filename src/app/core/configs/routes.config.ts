import { NavItem } from './../models/nav-item.model';

export const navItems: NavItem[] = [
  {
    displayName: 'Home',
    iconName: 'home',
    route: '/home',
    hasChildren: false
  },
  {
    displayName: 'Pages',
    iconName: 'pages',
    hasChildren: true,
    children: [
      {
        displayName: 'About Us',
        iconName: 'group',
        route: '/pages/about-us',
      },
      {
        displayName: 'Gallery',
        iconName: 'picture_in_picture',
        route: '/pages/gallery',
      },
      {
        displayName: 'Privacy Policy',
        iconName: 'speaker_notes',
        route: '/pages/privacy-policy',
      },
      {
        displayName: 'FAQ',
        iconName: 'question_answer',
        route: '/pages/faq',
      },
    ],
  },
  {
    displayName: 'Courses',
    iconName: 'school',
    hasChildren: true,
    children: [
      {
        displayName: 'Courses',
        iconName: 'school',
        route: '/courses/courses',
      },
      {
        displayName: 'Course Details',
        iconName: 'info',
        route: '/courses/details',
      },
      {
        displayName: 'Play',
        iconName: 'play_circle_fill',
        route: '/courses/play',
      },
    ],
  },
  {
    displayName: 'Tutors',
    iconName: 'people',
    route: '/tutors',
    hasChildren: false
  },
  {
    displayName: 'Blogs',
    iconName: 'notes',
    route: '/blogs',
    hasChildren: false
  },
  {
    displayName: 'Contact Us',
    iconName: 'perm_contact_cal',
    route: '/contact-us',
    hasChildren: false
  },
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    hasChildren: true,
    children: [
      {
        displayName: 'Student Dashboard',
        iconName: 'dashboard',
        route: '/dashboard/student-dashboard',
      },
      {
        displayName: 'Tutor Dashboard',
        iconName: 'dashboard',
        route: '/dashboard/tutor-dashboard',
      },
    ],
  },
  {
    displayName: 'Admin',
    iconName: 'person',
    hasChildren: true,
    children: [
      {
        displayName: 'Admin Tutor',
        iconName: 'person',
        route: '/admin/tutor',
      },
    ],
  },
];
