'use client'

import { useState, useEffect } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { queryClient } from "./Store"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const QueryProvider = ({ children }: any) => {
  const [isReady, setIsReady] = useState(false)
  const [persister, setPersister] = useState<any>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localPersister = createSyncStoragePersister({
        storage: window.localStorage,
      })
      setPersister(localPersister)
      setIsReady(true)
    }
  }, [])

  if (!isReady || !persister) return null

  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  )
}

export default QueryProvider
