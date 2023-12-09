import { Link, Typography } from "@mui/material";
import React from "react";

const Copyright: React.FC<any> = (props: any) => {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/livtavares" underline="hover" target="_blank" rel="noopener">
          Liv Tavares
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default Copyright;