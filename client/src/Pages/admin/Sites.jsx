import { useState } from "react";
import SitesCard from "../../adminComponent/sites/category/SitesCard";
import SitesCategory from "../../adminComponent/sites/category/SitesCategory";
import { Content } from "./Style";

function Sites() {
  return (
    <Content>
      <SitesCategory />
      <SitesCard />
    </Content>
  );
}

export default Sites;
