import {useAppSelectorRecipe} from "../redux/hooks/useAppSelectorRecipe.ts";
import {useAppDispatchPosts} from "../redux/hooks/useAppDispatchPosts.ts";
import {useEffect} from "react";
import {recipeSliceActions} from "../redux/recipeSlice/recipeSlice.tsx";


const RecipePage = () => {
    const {recipes, loadState} = useAppSelectorRecipe(({recipeSlice}) => recipeSlice);
    const dispatch = useAppDispatchPosts();
    useEffect(() => {
        dispatch(recipeSliceActions.loadRecipe())
    }, []);
    return (
        <div>
            {!loadState && <div>loading</div>}
            {
                recipes.map((recipe => (
                    <div className={'recipe'} key={recipe.id}>
                        <p>id:{recipe.id}</p>
                        <p>name:{recipe.name}</p>
                        <p>ingredients:{recipe.ingredients}</p>
                    </div>
                )))
            }
        </div>
    );
};

export default RecipePage;