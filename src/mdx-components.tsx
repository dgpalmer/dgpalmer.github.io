import React, { type ReactNode } from 'react';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }: { children: ReactNode }) => {
      return <div className="section">{children}</div>;
    },
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => {
      // Unique ID Generation
      const id = typeof props.children === 'string'
        ? props.children.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
        : '';
      return (
        <h2 id={id} className="section__heading" {...props} />
      )
    },
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3 className="section__subheading" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className="section__content" {...props} />
    ),
    strong: (props: React.HTMLAttributes<HTMLStyleElement>) => (
      <strong className="text__emphasis" {...props} />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a className="section__link" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
      <li className="section__li" {...props} />
    ),
    ...components,
  };
}
