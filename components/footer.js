import Box from "../components/box";
import { TwitterLogoIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import Link from "next/link";
import { ReaderIcon } from "@modulz/radix-icons";
import { styled } from '../stitches.config.ts';

const NavElement = styled('navelement', {
  display: 'block',
  borderRadius: '$round',
  fontSize: '$5',
  padding: '$2 $3',
  border: '2px solid $turq',
  color: '$gray100',
  fontWeight: 500,

  '&:hover': {
    backgroundColor: '$turq',
    color: '$black',
  },
});

const Footer = ({ }) => {
  return (
    <Box css={{ width: 650, margin: 'auto', position: 'auto', bottom: 0, }}>

      <Box
      css={{
        borderTop: "1px solid",
        borderColor: "$gray600",
        py: "$4",
        display: "grid",
        gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
        marginTop: 50,
        margin: "50 auto",
        fontSize: "$1",
        px: "$4",
        "@bp2": {
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        },
      }}
    />

      <Box>
        <Link href="/home"><NavElement>Home</NavElement></Link>
        <Link href="/about"><NavElement>About</NavElement></Link>
        <Link href="/work"><NavElement>Work</NavElement></Link>
      </Box>





    </Box>
  );
};

export default Footer;
