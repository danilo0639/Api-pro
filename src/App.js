import * as React from 'react';
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import ApiPages from './components/ApiPages';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ApiPages />
    </QueryClientProvider>
  );
}




