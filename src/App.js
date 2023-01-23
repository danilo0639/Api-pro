import * as React from 'react';
import {QueryClient,QueryClientProvider,} from '@tanstack/react-query'
import ApiPages from './components/ApiPages';
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient()

export default function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ApiPages />
      </BrowserRouter>
    </QueryClientProvider>
  );
}




