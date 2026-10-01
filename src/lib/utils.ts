import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SyllabusSubunit, AssessmentObjective, CommandTerm } from '@/types/curriculum';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function getSubunitLabel(subunit: SyllabusSubunit): string {
  switch (subunit) {
    case '1.1-what-is-a-business':
      return '1.1 What is a Business?';
    case '1.2-types-of-business-entities':
      return '1.2 Types of Business Entities';
    case '1.3-business-objectives':
      return '1.3 Business Objectives';
    case '1.4-stakeholders':
      return '1.4 Stakeholders';
    case 'bmt-swot-analysis':
      return 'BMT: SWOT Analysis';
    case 'bmt-ansoff-matrix':
      return 'BMT: Ansoff Matrix';
    case 'bmt-steeple-analysis':
      return 'BMT: STEEPLE Analysis';
    case 'bmt-toolkit':
      return 'BMT: Toolkit Hub';
    default:
      return subunit;
  }
}

export function getSubunitShortBadge(subunit: SyllabusSubunit): string {
  switch (subunit) {
    case '1.1-what-is-a-business':
      return 'Unit 1.1';
    case '1.2-types-of-business-entities':
      return 'Unit 1.2';
    case '1.3-business-objectives':
      return 'Unit 1.3';
    case '1.4-stakeholders':
      return 'Unit 1.4';
    case 'bmt-swot-analysis':
      return 'SWOT';
    case 'bmt-ansoff-matrix':
      return 'Ansoff';
    case 'bmt-steeple-analysis':
      return 'STEEPLE';
    case 'bmt-toolkit':
      return 'BMT';
    default:
      return subunit;
  }
}

export function getAoColor(ao: AssessmentObjective): { bg: string; text: string; border: string } {
  switch (ao) {
    case 'AO1':
      return {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        border: 'border-blue-200',
      };
    case 'AO2':
      return {
        bg: 'bg-amber-50',
        text: 'text-amber-800',
        border: 'border-amber-200',
      };
    case 'AO3':
    case 'AO2/AO3':
      return {
        bg: 'bg-purple-50',
        text: 'text-purple-700',
        border: 'border-purple-200',
      };
    default:
      return {
        bg: 'bg-gray-50',
        text: 'text-gray-700',
        border: 'border-gray-200',
      };
  }
}
