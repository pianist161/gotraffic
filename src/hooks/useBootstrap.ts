'use client';

import { useEffect } from 'react';

export default function useBootstrap() {
  useEffect(() => {
    // @ts-ignore: no types available for bootstrap.bundle.min.js
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
}
