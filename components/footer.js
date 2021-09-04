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
    <Box css={{ maxWidth: 650, margin: '20', position: 'center', bottom: 0, }}>

      <Box
      css={{
        boxSizing: 'border-box',
        justifyContent: 'center',
        alignItems: 'center',
        border: "1px solid",
        borderColor: "$gray600",
        maxWidth: '100%',
        marginTop: 40,

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
