import { useState } from "react";
import SitesCard from "../../adminComponent/sites/category/SitesCard";
import SitesCategory from "../../adminComponent/sites/category/SitesCategory";
import { Content } from "./Style";

function Sites() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <Content>
      <SitesCategory
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <SitesCard activeCategory={activeCategory} />
    </Content>
  );
}

export default Sites;
