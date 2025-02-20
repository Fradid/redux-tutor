import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolid } from "@fortawesome/free-solid-svg-icons";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";

const RecipeItem = ({ recipe }) => {
	const { favorites } = useFavorites();

	const { toggleFavorite } = useActions();

	const isExists = favorites.some((r) => r.id === recipe.id);

	console.log(favorites);

	return (
		<div className="flex flex-col items-center bg-[#97BC62] w-full p-6 m-5 border border-none rounded-xl">
			<img src={recipe.image} alt={recipe.name} className="mb-4" />
			<div className="flex justify-center items-center gap-3">
				<h2 className="font-medium text-xl text-[#2C5F2D]">
					{recipe.name}
				</h2>
				{/* Make hover effect on button */}
				{isExists ? (
					<FontAwesomeIcon
						icon={faSolid}
						size="xl"
						style={{ color: "#c4501b" }}
						onClick={() => toggleFavorite(recipe)}
					/>
				) : (
					<FontAwesomeIcon
						icon={faHeart}
						size="xl"
						style={{ color: "#c4501b" }}
						// className="p-5 hover:border-red-600 hover:bg-red-400/50 transition-all ease-in-out duration-500"
						onClick={() => toggleFavorite(recipe)}
					/>
				)}
			</div>
		</div>
	);
};

export default RecipeItem;
