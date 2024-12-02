import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store  } from './redux/store/store.ts'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const persistor = persistStore(store);
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
           <App />
          </BrowserRouter>
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
