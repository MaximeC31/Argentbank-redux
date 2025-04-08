import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { User } from './pages/User';
import ProtectedRoute from './components/ProtectedRoute';
import { Main } from './layout/Main';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Main />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='sign-in'
						element={<SignIn />}
					/>
					<Route
						path='user'
						element={
							<ProtectedRoute>
								<User />
							</ProtectedRoute>
						}
					/>
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
