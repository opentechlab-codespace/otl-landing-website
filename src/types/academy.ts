import { ReactNode } from 'react';

export interface TopicItem {
  title: string;
  items: string[];
}

export interface CourseData {
  icon: ReactNode;
  title: string;
  slug: string;
  description: string;
  topics: TopicItem[];
}

export interface CourseHeaderProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface CourseTopicsProps {
  topics: TopicItem[];
}

export interface CourseCardProps extends CourseData {}