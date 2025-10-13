import { QueryObserver } from '@tanstack/query-core'
import type { Tracked } from 'ripple'
import { createBaseQuery } from './createBaseQuery.ripple'
import type { DefaultError, QueryClient, QueryKey } from '@tanstack/query-core'
import type {
  CreateQueryOptions,
  CreateQueryResult,
  DefinedCreateQueryResult,
} from './types.js'
import type {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
} from './queryOptions.js'

export function createQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: Tracked<
    UndefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>
  >,
  queryClient?: Tracked<QueryClient>,
): CreateQueryResult<TData, TError>

export function createQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: Tracked<
    DefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>
  >,
  queryClient?: Tracked<QueryClient>,
): DefinedCreateQueryResult<TData, TError>

export function createQuery<
  TQueryFnData,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  options: Tracked<CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>>,
  queryClient?: Tracked<QueryClient>,
): CreateQueryResult<TData, TError>

export function createQuery(
  options: Tracked<CreateQueryOptions>,
  queryClient?: Tracked<QueryClient>,
) {
  return createBaseQuery(options, QueryObserver, queryClient)
}
