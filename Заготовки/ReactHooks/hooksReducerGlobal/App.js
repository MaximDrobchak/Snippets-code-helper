import React from 'react';
import { GlobalStateProvider } from './store';
import Counter from './Counter';

export default () => (
  <GlobalStateProvider>
    <Counter />
  </GlobalStateProvider>
);
