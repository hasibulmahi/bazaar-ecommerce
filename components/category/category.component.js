import { Grid } from "@mui/material";
import React from "react";
import { categoryList } from "./category-seeds";
import CategoryItem from "./category-item";

function Category(props) {
  return (
    <Grid container spacing={2}>
      {categoryList &&
        categoryList.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={i}>
            <CategoryItem
              categoryImage={item.image}
              categorySlug={item.slug}
              categoryTitle={item.title}
            />
          </Grid>
        ))}
    </Grid>
  );
}

export default Category;
