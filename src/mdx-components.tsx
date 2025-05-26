import React from 'react';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 className="section__heading" {...props} />
    ),
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
    ...components,
  };
}
