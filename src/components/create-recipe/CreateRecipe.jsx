import React, { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

const initialValue = {
	name: "",
	image: "",
};

const CreateRecipe = () => {
	const [recipe, setRecipe] = useState(initialValue);

	const [ createRecipe ] = useCreateRecipeMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await createRecipe(recipe);
		setRecipe(initialValue);
	};

	return (
		<div className="flex items-center justify-center">
			<div className="border rounded-xl border-[#97BC62] p-6 m-6 max-w-80">
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<h1 className="text-xl text-[#97BC62] font-medium">
						Create new recipe:
					</h1>
					<label>
						<input
							type="text"
							placeholder="Name"
							value={recipe.name}
							onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
							className="text-white font-medium outline-none bg-transparent p-4 w-full focus:border focus:rounded-xl focus:border-[#97BC62]"
						/>
					</label>
					<label>
						<input
							type="text"
							placeholder="Image"
							value={recipe.image}
							onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
							className="text-white font-medium outline-none bg-transparent p-4 w-full focus:border focus:rounded-xl focus:border-[#97BC62]"
						/>
					</label>
					<button
						type="submit"
						className="text-[#97BC62] border rounded-3xl border-[#97BC62] py-4 font-medium hover:text-[#2C5F2D] hover:bg-[#97BC62] transition-all duration-300 ease-in-out"
					>
						Create
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateRecipe;
