"use client"
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const ReactQueryProvider = ({ children }) => {
    
        const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
                {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default ReactQueryProvider
