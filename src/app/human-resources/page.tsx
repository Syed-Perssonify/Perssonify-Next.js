'use client';
import React from 'react';
import SolutionTemplate from '@/common/SolutionTemplate';
import { UserPlus, ShieldCheck, BookOpen, BarChart3 } from 'lucide-react';

const HumanResources: React.FC = () => {
  const services = [
    {
      icon: UserPlus,
      title: 'Digital Onboarding & Offboarding',
      link: '/human-resources/digital-onboarding-and-offboarding',
      description: 'Digitizing onboarding and offboarding workflows to eliminate manual steps and reduce time-to-productivity.'
    },
    {
      icon: ShieldCheck,
      title: 'Automated Compliance Tracking',
      link: '/human-resources/automated-compliance-tracking',
      description: 'Automating compliance tracking for policies, access revocation, certifications, and regulatory acknowledgments.'
    },
    {
      icon: BookOpen,
      title: 'HR System Integration',
      link: '/human-resources/hr-system-integration',
      description: 'Integrating HR systems to ensure data consistency across recruitment, payroll, and performance tools.'
    },
    {
      icon: BarChart3,
      title: 'Self-Service HR Portals',
      link: '/human-resources/self-service-hr-portals',
      description: 'Enabling HR self-service and knowledge portals to reduce internal ticket volume and increase employee satisfaction.'
    }
  ];

  return (
    <SolutionTemplate
      title="Human Resources"
      description="Streamlining HR processes to reduce friction, improve compliance, and elevate the employee experience."
      services={services}
      ctaTitle="Ready to Transform Your HR Operations?"
      ctaDescription="Let&apos;s streamline your human resources processes and improve employee experience."
      backLink="/strategic-solutions"
      backLinkText="View All Strategic Solutions"
      parentLabel="Strategic Solutions"
      parentHref="/strategic-solutions"
    />
  );
};

export default HumanResources;
