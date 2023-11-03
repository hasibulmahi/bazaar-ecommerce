import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { categoryList } from "./category-seeds";

import CategoryItem from "./category-item";

function Category(props) {
  return (
    <Grid container spacing={2}>
      {categoryList &&
        categoryList.map((item, i) => (
          <Grid item sm={2} key={i}>
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
