'use client'
// import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// const QueryProvider = ({ children }: any) => {
//   const queryClient = new QueryClient();
//   return (
//     <>
//       <QueryClientProvider client={queryClient}>
//         {children}
//         <ReactQueryDevtools initialIsOpen={false} />
//       </QueryClientProvider>
//     </>
//   );
// };

// export default QueryProvider;

import { QueryClientProvider } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { queryClient } from "./Store";


const QueryClient = queryClient

const persister = createSyncStoragePersister({
  storage: window.localStorage,
})


const QueryProvider = ({ children }: any) => {
  return (
    <PersistQueryClientProvider client={QueryClient} persistOptions={{ persister }}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  );
}

export default QueryProvider