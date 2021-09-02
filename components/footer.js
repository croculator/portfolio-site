import Box from "../components/box";
import { TwitterLogoIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import Link from "next/link";
import { ReaderIcon } from "@modulz/radix-icons";

const Footer = ({ }) => {
  return (
    <Box>

      <Box
      css={{
        borderTop: "1px solid",
        borderColor: "$border",
        py: "$4",
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        margin: "0 auto",
        fontSize: "$1",
        px: "$4",
        "@bp2": {
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        },
      }}

    />

    <p>footer</p>


    </Box>
  );
};

export default Footer;
