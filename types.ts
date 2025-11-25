import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  tech: string[];
}

export interface TeamMember {
  role: string;
  description: string;
}
