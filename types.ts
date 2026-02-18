// Added React import to fix namespace errors for ReactNode in lines 7 and 13
import React from 'react';

export interface SolutionCard {
  title: string;
  description: string;
  link: string;
  badges?: string[];
  icon: React.ReactNode;
}

export interface Metric {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}