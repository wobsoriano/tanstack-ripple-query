# tanstack-ripple-query

## Installation

```bash
npm install tanstack-ripple-query
```

## Usage

```tsx
import {
  createQuery,
  QueryClient,
  QueryClientProvider,
} from 'tanstack-ripple-query'

import { getTodos } from '../my-api'

// Create a client
const queryClient = new QueryClient()

component App() {
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
}

component Todos() {
    // Access the client
    const queryClient = useQueryClient()

    // Queries
    const query = createQuery({ queryKey: ['todos'], queryFn: getTodos })

    if (query.isLoading) {
        <p>{'Loading...'}</p>
    } else if (query.isError) {
        <p>{`Error: ${query.error.message}`}</p>
    } else if (query.isSuccess) {
        <ul>
            for (const todo of query.data) {
                <li>{todo.title}</li>
            }
        </ul>
    }
}
```

## Available helpers

- [x] `createQuery`
- [ ] `createMutation`
- [ ] `createInfiniteQuery`

## License

MIT
