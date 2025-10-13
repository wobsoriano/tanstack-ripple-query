# tanstack-ripple-query

## Installation

```bash
npm install tanstack-ripple-query
```

## Usage

```tsx
import {
  createQuery,
  useQueryClient,
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
    const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

    <div>
        <ul>
            for (const todo of query.data) {
                <li>{todo.title}</li>
            }
        </ul>
    </div>
}
```

## License

MIT
