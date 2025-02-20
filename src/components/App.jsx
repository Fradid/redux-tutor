import { useGetRecipesQuery } from "../store/api/api";
import Header from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";

function App() {
	const { isLoading, data } = useGetRecipesQuery();
	return (
		<div>
			<Header />
			<div className="flex items-center justify-center w-full h-full overflow-hidden">
				{isLoading ? (
					<div>Loading...</div>
				) : data ? (
					data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
				) : (
					<div>Not Found</div>
				)}
			</div>
		</div>
	);
}

export default App;
