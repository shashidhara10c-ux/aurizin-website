---
name: React Query auth-gated cache leak
description: Why auth-gated list views using a static query key + bearer-in-headers can leak cached data across credential attempts
---

# React Query auth-gated views can leak cached data

When a protected list view (e.g. an admin dashboard) fetches via an Orval/React-Query
hook where the credential is passed **only** in per-call request headers (Bearer token),
the query key is auth-agnostic (static). React Query then caches the response under that
static key.

**The leak:** after a valid session populates the cache, a later mount with an *invalid*
credential can briefly render the stale cached rows before the refetch returns 401 and the
logout effect fires. The UI auth boundary is broken even though the server is correct.

**Fix applied:**
- Add `gcTime: 0` (and `staleTime: 0`) to the query options so the cache is discarded the
  moment the authed component unmounts.
- On logout AND on 401, call `queryClient.removeQueries({ queryKey: <key>() })`.

**Why:** the server stays authoritative, but the client must not retain sensitive
auth-gated data across credential changes. **How to apply:** any time a React-Query hook
guards sensitive data with a token sent via headers rather than baked into the query key.
