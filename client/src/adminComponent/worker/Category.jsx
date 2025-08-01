import { useEffect } from "react";
import { CategoryContainer, StyleCategory } from "./StyleWorker";
import { useSearchParams } from "react-router-dom";

function Category() {
  const [searchParms, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParms.set("filter", "all");
    setSearchParams(searchParms);
  }, []);
  const active = searchParms.get("filter");

  function handleClick(value) {
    searchParms.set("filter", value);
    setSearchParams(searchParms);
  }

  return (
    <StyleCategory>
      <CategoryContainer>
        Category
        <select
          value={active || "all"}
          onChange={(e) => {
            handleClick(e.target.value);
          }}
        >
          <option value="all">all</option>
          <option value="active">active</option>
          <option value="non-active">Non Active </option>
        </select>
      </CategoryContainer>
    </StyleCategory>
  );
}

export default Category;
