import { categoryList } from "@/components/category/category-seeds";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function CategoryPage(props) {
  const router = useRouter();
  const { permalink } = router.query;

  useEffect(() => {
    let currentCategory = "";
    categoryList &&
      categoryList.map((item, i) => {
        if (item.slug == permalink) {
          currentCategory = item.id;
        }
      });
  }, [permalink]);

  console.log("router", router);
  return <div>I am {permalink} page</div>;
}

export default CategoryPage;
