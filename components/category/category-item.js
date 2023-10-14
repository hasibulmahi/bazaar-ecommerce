import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import BazaarButton from "../ui/button.component";
import { Box } from "@mui/material";
import { common } from "@mui/material/colors";

function CategoryItem({ categoryImage, categorySlug, categoryTitle }) {
  const [mouseHover, setMouseHover] = useState(false);
  return (
    <Box
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="    "
      sx={{
        bgcolor: common.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "column",
        position: "relative",
        pt: 5,
        pb: 2,
      }}
    >
      {/* <style global jsx>{`
        .category-item:hover .category-button {
          background: #2b3445 !important;
          color: #fff;
        }
      `}</style> */}

      <Box
        sx={{
          pb: 3,
        }}
      >
        <Image src={categoryImage} width={100} height={100} alt="img" />
      </Box>

      <Link href={categorySlug} passHref>
        <BazaarButton
          text={categoryTitle}
          className="  "
          buttonSx={{
            position: "absolute",
            display: "inline-flex",
            px: "25px",
            py: "4px",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: 3,
            minWidth: "max-content",
            color: "#2B3445",
            bgcolor: "#fff",
            boxShadow: "none !important",
            ...(mouseHover && {
              background: "#2b3445 !important",
              color: "#fff",
            }),
          }}
        />
      </Link>
    </Box>
  );
}

export default CategoryItem;
