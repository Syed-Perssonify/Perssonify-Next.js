'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { Target, BarChart3, Shuffle, Settings } from 'lucide-react';

const CrossFunctionalLeadership: React.FC = () => {
  const services = [
    {
      icon: Shuffle,
      title: 'Org-Wide Workflow Reengineering',
      link: '/cross-functional-leadership/org-wide-workflow-reengineering',
      description: 'Reengineering org-wide workflows to align teams, systems, and goals across all departments and functions.'
    },
    {
      icon: BarChart3,
      title: 'Centralized Multi-Department Visibility',
      link: '/cross-functional-leadership/centralized-multi-department-visibility',
      description: 'Building centralized visibility for multi-department initiatives and shared KPIs to improve coordination.'
    },
    {
      icon: Target,
      title: 'Harmonized Handoffs & Responsibilities',
      link: '/cross-functional-leadership/harmonized-handoffs-and-responsibilities',
      description: 'Harmonizing handoffs and responsibilities to remove duplication and missed steps between departments.'
    },
    {
      icon: Settings,
      title: 'Scalable Execution Models',
      link: '/cross-functional-leadership/scalable-execution-models',
      description: 'Developing scalable execution models that enable agility across evolving business priorities.'
    }
  ];

  return (
    <SolutionTemplate
      title="Cross-Functional Leadership"
      description="Enabling alignment and execution across departments, systems, and strategic initiatives."
      
      services={services}
      ctaTitle="Ready to Align Your Organization?"
      ctaDescription="Let&apos;s bridge silos and drive execution across your teams and strategic initiatives."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
      parentLabel="Strategic Solutions"
      parentHref="/strategic-solutions"
    />
  );
};

export default CrossFunctionalLeadership;
