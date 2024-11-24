import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<>Home</>} />
					<Route path="/details" element={<>Details</>}/>
				</Routes>
			</BrowserRouter>	
		</>
	);
}

export default App;
