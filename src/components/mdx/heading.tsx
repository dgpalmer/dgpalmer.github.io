import { createElement, ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}

export function Heading({ children }: HeadingProps) {
  // Unique ID Generation
  const id = typeof children === 'string'
    ? children.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
    : '';

  return createElement(
    `h2`,
    { id, className: `section__heading` },
    children
  );
}
