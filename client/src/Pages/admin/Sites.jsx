import { useState } from "react";
import SitesCard from "../../adminComponent/sites/category/SitesCard";
import SitesCategory from "../../adminComponent/sites/category/SitesCategory";
import { Content } from "./Style";

function Sites({ sites, workers }) {
  const [activeCategory, setActiveCategory] = useState("Active Sites");

  return (
    <Content>
      <SitesCategory
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <SitesCard sites={sites} workers={workers} />
    </Content>
  );
}

export default Sites;
