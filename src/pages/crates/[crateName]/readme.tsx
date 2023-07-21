import { FC } from "react";

import { Paper } from "@mui/material";

import Markdown from "@components/Markdown";

const CrateReadme: FC<{ readme: string }> = ({ readme }) => (
  <Paper sx={{ padding: 2 }}>
    <Markdown markdown={readme} />
  </Paper>
);

export default CrateReadme;