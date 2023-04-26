import { Injectable } from '@angular/core';
import { AppRouter } from '@rankle/backend/rankle-core';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';

@Injectable({ providedIn: 'root' })
export class ApiClientService {
  apiClient = createTRPCProxyClient<AppRouter>({
    transformer: superjson,
    links: [
      httpBatchLink({
        url: 'http://localhost:3333/api',
        headers: () => this.getHeaders(),
      }),
    ],
  });

  private getHeaders() {
    return {
      test: 'header-from-fe',
    };
  }
}
