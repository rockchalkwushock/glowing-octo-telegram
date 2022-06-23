import { ErrorBoundary } from '@components/ErrorBoundary'
import { LoadingOverlay } from '@components/LoadingOverlay'
import { BaseLayout } from '@layouts/BaseLayout'
import { Route, Routes } from '@services/router'
import { lazy, Suspense } from 'react'

const Home = lazy(
	async () => import('./pages/Home/Home' /* webpackChunkName Home */)
)
const NotFound = lazy(
	async () =>
		import('./pages/NotFound/NotFound' /* webpackChunkName NotFound */)
)

function App() {
	return (
		<ErrorBoundary>
			<Suspense fallback={<LoadingOverlay />}>
				<Routes>
					<Route element={<BaseLayout />}>
						<Route path='/' element={<Home />} />
						{/* Catch All */}
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</Suspense>
		</ErrorBoundary>
	)
}

export default App
