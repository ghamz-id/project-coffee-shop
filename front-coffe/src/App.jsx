import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home_Page from "./views/home_page";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home_Page />,
	},
]);

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
