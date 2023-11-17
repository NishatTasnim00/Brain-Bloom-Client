import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { router } from './routes/Routers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkModeProvider } from './Provider/DarkMoodProvider';
import AuthProvider from './Provider/AuthProvider';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<DarkModeProvider>
				<AuthProvider>
					<Toaster />
					<RouterProvider router={router} />
				</AuthProvider>
			</DarkModeProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
