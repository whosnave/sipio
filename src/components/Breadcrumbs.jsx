import React from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography
} from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <MUIBreadcrumbs aria-label="breadcrumb" separator=">">
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography sx={{ fontSize: 14 }} key={name}>
            {name}
          </Typography>
        ) : (
          <Link
            key={name}
            underline="hover"
            color="#3086B9"
            sx={{ fontSize: 14, fontWeight: 800, cursor: "pointer" }}
            onClick={() => navigate(routeTo)}
          >
            {name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
