'use client';

import { PropsWithChildren } from 'react';

import { useResizeViewportHeight } from '@nf-team/react';

function Template({ children }: PropsWithChildren) {
  useResizeViewportHeight();

  return (
    <>{children}</>
  );
}

export default Template;
