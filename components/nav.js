import Box from "../components/box";
import { TwitterLogoIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import Link from "next/link";
import { ReaderIcon } from "@modulz/radix-icons";
import { styled } from '../stitches.config.ts';


 const NavElement = styled('navelement', {
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


const Nav = ({ }) => {
  return (
    <>
        <Box css={{
            overflow: 'hidden',
            backgroundColor: '$gray500',
            position: 'fixed',
            top: 0,
            width: '100%',
            height: 60,
            display: 'flex',
            justifyContent: 'flex-end',


        }}>

        <Box css={{ margin: 10, width: 500, boxSizing: 'border-box', display: 'flex', justifyContent: 'flex-end',}}>
            <Link href="/home"><NavElement>Home</NavElement></Link>
            <Link href="/work"><NavElement>Work</NavElement></Link>
            <Link href="/about"><NavElement>About</NavElement></Link>
        </Box>

        </Box>
    </>
  );
};

export default Nav;
