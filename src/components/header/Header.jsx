import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFavorites } from "../../hooks/useFavorites";

const Header = () => {
	const { favorites } = useFavorites();

	return (
		<header className="flex justify-end px-4 py-4 mt-2">
			<FontAwesomeIcon
				icon={faCartShopping}
				size="xl"
				style={{ color: "#97BC62" }}
				className="relative"
			/>
			<span className="bg-[#c4501b] absolute top-2 right-1 rounded-full px-2 py-1 text-xs font-bold text-white">
				{favorites.length}
			</span>
		</header>
	);
};

export default Header;
