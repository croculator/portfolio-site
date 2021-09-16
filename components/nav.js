import Box from "../components/box";
import { TwitterLogoIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import Link from "next/link";
import { ReaderIcon } from "@modulz/radix-icons";
import { styled } from '../stitches.config.ts';
import ThemeToggle from "./themeToggle";


 const NavElement = styled('navelement', {
    borderRadius: '$round',
    fontSize: '$5',
    padding: '$2 $3',
    border: '2px solid $turq',
    color: '$gray100',
    fontWeight: 400,

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
            backgroundColor: 'hsla(0, 0%, 100%, 0.98)',
            // backgroundColor: 'hsla(47, 19%, 91%, 0.95)',
            position: 'fixed',
            top: 0,
            width: '100%',
            height: 80,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
        }}>

        <Box css={{ margin: 30, width: '100%', justifyContent: 'flex-start'}}>
            <Link href="/"><NavElement css={{ fontWeight: 600,}}>Michael Diaz</NavElement></Link>

        </Box>

        <Box css={{ margin: 30, justifyContent: 'flex-end'}}>
            <Link href="/"><NavElement>Home</NavElement></Link>
            <Link href="/work"><NavElement>Work</NavElement></Link>
            {/* <NavElement> <ThemeToggle /></NavElement> */}

        </Box>

        </Box>
    </>
  );
};
 
export default Nav;
