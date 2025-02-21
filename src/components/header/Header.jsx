import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFavorites } from "../../hooks/useFavorites";

const Header = () => {
	const { favorites } = useFavorites();

	return (
		<header className="p-4 pl-7 fixed bg-[#2C5F2D] mb-4 w-full">
			<div className="flex">
				<div className="flex-1">
					<h1 className="font-medium text-[#97BC62] text-2xl">Meal Recipes</h1>
				</div>
				<div>
					<FontAwesomeIcon
						icon={faCartShopping}
						size="xl"
						style={{ color: "#97BC62" }}
						className="relative"
					/>
					<span className="bg-[#c4501b] absolute top-2 right-1 rounded-full px-2 py-1 text-xs font-medium text-white">
						{favorites.length}
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
