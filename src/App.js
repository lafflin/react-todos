import * as React from "react";
import "./App.css";
import Header from "./components/header";
import Todo from "./components/todo";
import Footer from "./components/footer";

function App() {
	return (
		<div>
			<Header />
			<Todo />
			<Footer />
		</div>
	);
}

export default App;
