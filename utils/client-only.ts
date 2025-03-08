import { useEffect, useLayoutEffect } from 'react';

// This hook is used to avoid the useLayoutEffect warning during server-side rendering
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect; 