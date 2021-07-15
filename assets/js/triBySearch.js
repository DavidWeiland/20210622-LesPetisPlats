import { recipes } from "./recipes";
import { triRecipes } from "./tri__recipes";
import { pageConstruction } from "./page__reconstruction";
import{ tagsShowerFromSearch} from "./tag__shower"
import { categories } from "./selects__objets";

export let triBySearch = function (keySearch) {
  //vérifie nombre de lettres min (3) + Alpha != number
  function testInput(regex, chaine) {
    if (regex.test(chaine)) {
      triRecipes(keySearch);
      console.log(keySearch)
  categories.forEach((categorie) => {
    if (categorie != "") {
      tagsShowerFromSearch(categorie, keySearch)
      keySearch = ""
      console.log(keySearch)
    }
  })
    }
    else {
      pageConstruction(recipes)
    }
  }
  testInput(/^[A-Za-z -]\D{2,}$/, keySearch);
};
