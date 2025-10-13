import { QueryObserver } from '@tanstack/query-core';
import { createBaseQuery } from './createBaseQuery.ripple';
import type { DefaultError, QueryClient, QueryKey } from '@tanstack/query-core';
import type { CreateQueryOptions, CreateQueryResult, DefinedCreateQueryResult, MaybeTracked } from './types.js';
import type { DefinedInitialDataOptions, UndefinedInitialDataOptions } from './queryOptions.js';

export function createQuery<
	TQueryFnData = unknown,
	TError = DefaultError,
	TData = TQueryFnData,
	TQueryKey extends QueryKey = QueryKey,
>(
	options: MaybeTracked<UndefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>>,
	queryClient?: MaybeTracked<QueryClient>
): CreateQueryResult<TData, TError>;

export function createQuery<
	TQueryFnData = unknown,
	TError = DefaultError,
	TData = TQueryFnData,
	TQueryKey extends QueryKey = QueryKey,
>(
	options: MaybeTracked<DefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>>,
	queryClient?: MaybeTracked<QueryClient>
): DefinedCreateQueryResult<TData, TError>;

export function createQuery<
	TQueryFnData,
	TError = DefaultError,
	TData = TQueryFnData,
	TQueryKey extends QueryKey = QueryKey,
>(
	options: MaybeTracked<CreateQueryOptions<TQueryFnData, TError, TData, TQueryKey>>,
	queryClient?: MaybeTracked<QueryClient>
): CreateQueryResult<TData, TError>;

export function createQuery(
	options: MaybeTracked<CreateQueryOptions>,
	queryClient?: MaybeTracked<QueryClient>
) {
	return createBaseQuery(options, QueryObserver, queryClient);
}
