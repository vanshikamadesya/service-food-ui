import CategoryCardList from "./CategoryList";
import { categories } from "../../data/ourCategoriesData";

export const OurCategory = () => {
  return (
    <CategoryCardList
      categories={categories}
      title="OUR CATEGORIES"
      showDivider={true}
      titleAlignment="center"
      titlePosition='top'
    />
  );
};

