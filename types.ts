
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  link: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

export interface PillarProps {
  title: string;
  description: string;
  icon: string;
}

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
  AI_CONSULTANT = 'ai-consultant'
}
