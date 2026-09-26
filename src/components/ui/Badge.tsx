import React from 'react';
import { cn } from '@/lib/utils';
import { AssessmentObjective } from '@/types/curriculum';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'ao1' | 'ao2' | 'ao3' | 'mark' | 'neutral' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
}

export function Badge({
  className,
  variant = 'neutral',
  size = 'md',
  children,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full tracking-wide select-none';

  const variants = {
    ao1: 'bg-blue-50 text-blue-700 border border-blue-200/80',
    ao2: 'bg-amber-50 text-amber-800 border border-amber-200/80',
    ao3: 'bg-purple-50 text-purple-700 border border-purple-200/80',
    mark: 'bg-stone-100 text-stone-700 border border-stone-200 font-mono tabular-nums',
    neutral: 'bg-stone-100 text-stone-700 border border-stone-200',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200',
    danger: 'bg-red-50 text-red-700 border border-red-200',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-0.5',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </span>
  );
}

export function AoBadge({ ao }: { ao: AssessmentObjective }) {
  if (ao === 'AO1') return <Badge variant="ao1">AO1 Knowledge</Badge>;
  if (ao === 'AO2') return <Badge variant="ao2">AO2 Application</Badge>;
  return <Badge variant="ao3">AO3 Analysis</Badge>;
}

export function MarkBadge({ marks }: { marks: number }) {
  return <Badge variant="mark">[{marks} {marks === 1 ? 'mark' : 'marks'}]</Badge>;
}
