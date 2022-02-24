import "../App.css";
import Register from "./Register";
import Login from "./Login";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import NotFoundPage from "./NotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/dashboard/*" element={<Dashboard />}>
					<Route path="welcome" element={<p>Welcome!</p>} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}
