import type {
	DefaultError,
	DefinedQueryObserverResult,
	QueryClient,
	QueryKey,
	QueryObserverOptions,
	QueryObserverResult,
} from '@tanstack/query-core';
import { PropsWithChildren, Tracked } from 'ripple';

export type QueryClientProviderProps = PropsWithChildren<{
	client: QueryClient;
}>;

/** Options for createBaseQuery */
export type CreateBaseQueryOptions<
	TQueryFnData = unknown,
	TError = DefaultError,
	TData = TQueryFnData,
	TQueryData = TQueryFnData,
	TQueryKey extends QueryKey = QueryKey,
> = QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>;

/** Result from createBaseQuery */
export type CreateBaseQueryResult<TData = unknown, TError = DefaultError> = QueryObserverResult<
	TData,
	TError
>;

/** Options for createQuery */
export type CreateQueryOptions<
	TQueryFnData = unknown,
	TError = DefaultError,
	TData = TQueryFnData,
	TQueryKey extends QueryKey = QueryKey,
> = CreateBaseQueryOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>;

/** Result from createQuery */
export type CreateQueryResult<TData = unknown, TError = DefaultError> = CreateBaseQueryResult<
	TData,
	TError
>;

/** Options for createBaseQuery with initialData */
export type DefinedCreateBaseQueryResult<
	TData = unknown,
	TError = DefaultError,
> = DefinedQueryObserverResult<TData, TError>;

/** Options for createQuery with initialData */
export type DefinedCreateQueryResult<
	TData = unknown,
	TError = DefaultError,
> = DefinedCreateBaseQueryResult<TData, TError>;

export type MaybeTracked<T> = T | Tracked<T>;
