import Box from "../components/box";
import { TwitterLogoIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import { ReaderIcon, Link2Icon } from "@modulz/radix-icons";
import WorkColumn from "./workColumn";

import { styled } from '../stitches.config.ts';

import Link from "next/link";

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

  const DivLine = styled('div', {
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    border: "1px solid",
    borderColor: "$gray600",
    maxWidth: '100%',
  });



const Timeline = ({ }) => {
  return (

    
    <Box css={{  }}> 
    <Box css={{ fontSize: '$7', fontWeight: 600, paddingBottom: 50}}>Professional Work</Box>

    {/* Professional Work */}

    {/* Blizzard */}
    <DivLine/>
    <WorkColumn number="01" title="Blizzard Entertainment" description="3D Cinematic Compositor" url="work/blizzard"/>





    </Box>
  );
};

export default Timeline;
