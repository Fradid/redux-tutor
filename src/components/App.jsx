import RecipeItem from "./recipe-item/RecipeItem";

function App() {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<RecipeItem recipe={{ id: 1, name: "Pasta" }} />
			<RecipeItem recipe={{ id: 2, name: "Sushi" }} />
			<RecipeItem recipe={{ id: 3, name: "WOK" }} />
		</div>
	);
}

export default App;
