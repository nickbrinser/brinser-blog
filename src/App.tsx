import React, { Suspense, lazy } from 'react'
import * as RD from '@devexperts/remote-data-ts'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/lib/function'

import { useAuth } from './Auth'

const AuthenticatedApp = lazy(() => import('./authenticatedApp'))
const UnauthenticatedApp = lazy(() => import('./unauthenticatedApp'))

function App() {
  const currentUser = useAuth()
  return (
    <Suspense fallback={<div />}>
      {pipe(
        currentUser,
        RD.fold(
          () => null,
          () => <p>Loading</p>,
          () => <p>There is an error with authentication.</p>,
          user =>
            pipe(
              user,
              O.fold(
                () => <UnauthenticatedApp />,
                () => <AuthenticatedApp />
              )
            )
        )
      )}
    </Suspense>
  )
}

export default App
