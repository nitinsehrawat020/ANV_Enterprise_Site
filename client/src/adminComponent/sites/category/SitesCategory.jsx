import { useSearchParams } from "react-router-dom";
import { CategoryContainer, StyleCategory } from "../StyleSites";
import { useEffect } from "react";

function SitesCategory() {
  const categories = ["All", "Active", "Complete", "Upcoming"];
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    searchParams.set("filter", "All");
    setSearchParams(searchParams);
  }, []);
  const active = searchParams.get("filter");

  function handleClick(value) {
    console.log(value);

    searchParams.set("filter", value);
    setSearchParams(searchParams);
  }

  return (
    <StyleCategory>
      <CategoryContainer>
        Category:-
        <select
          value={active || "All"}
          onChange={(e) => {
            handleClick(e.target.value);
          }}
        >
          {categories.map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
      </CategoryContainer>
    </StyleCategory>
  );
}

export default SitesCategory;
