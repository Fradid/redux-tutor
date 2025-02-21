import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolid } from "@fortawesome/free-solid-svg-icons";
import { useActions } from "../../hooks/useActions";
import { useFavorites } from "../../hooks/useFavorites";

const RecipeItem = ({ recipe }) => {
	const { favorites } = useFavorites();

	const { toggleFavorite } = useActions();

	const isExists = favorites.some((r) => r.id === recipe.id);

	return (
		<div className="flex flex-col items-center bg-[#97BC62] w-full p-6 border border-none rounded-xl">
			<img src={recipe.image} alt={recipe.name} className="mb-4 rounded-lg" />
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
						className="cursor-pointer"
						onClick={() => toggleFavorite(recipe)}
					/>
				) : (
					<FontAwesomeIcon
						icon={faHeart}
						size="xl"
						style={{ color: "#c4501b" }} //if i comment this line the hover effect works fine
						// className="hover:text-red-600 transition-colors ease-in-out duration-500"
						className="cursor-pointer"
						onClick={() => toggleFavorite(recipe)}
					/>
				)}
			</div>
		</div>
	);
};

export default RecipeItem;
