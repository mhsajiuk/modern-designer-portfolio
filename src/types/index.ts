export interface SkillItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryTag: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  feedback: string;
  clientName: string;
  clientCompany: string;
  clientRole: string;
  clientAvatar: string;
  rating: number;
}

export interface BrandLogo {
  id: string;
  name: string;
  svgPath?: string;
}
