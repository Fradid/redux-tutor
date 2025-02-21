import { useGetRecipesQuery } from "../store/api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";
import Header from "./header/Header";
import RecipeItem from "./recipe-item/RecipeItem";

// const userId = null

function App() {
	const { isLoading, data } = useGetRecipesQuery();
	// undefined, {
	// 	skip: !userId,
	// }
	return (
		<div className="flex flex-col w-full">
			<Header />
			<div className="pt-16">
				<CreateRecipe />
				<div className="grid grid-cols-3 gap-8 max-w-screen-xl mx-auto">
					{isLoading ? (
						<div>Loading...</div>
					) : data ? (
						data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
					) : (
						<div>Not Found</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
