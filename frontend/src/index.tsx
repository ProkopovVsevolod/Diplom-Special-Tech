import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </QueryClientProvider>
     
);

