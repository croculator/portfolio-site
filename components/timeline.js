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

    {/* Bellator */}
    <DivLine/>
    <WorkColumn number="01" title="Bellator MMA" description="Graphic Desiger for print media for in stadium graphics" />

    {/* Microsoft/Hunger Games */}
    <DivLine/>
    <WorkColumn number="01" title="Microsoft/Hunger Games" description="Motion graphics compositor"/>

    {/* Alice In chains */}
    <DivLine/>
    <WorkColumn number="01" title="Alice in Chains" description="Post Production Supervisor & 3D artist for their launch music video devil put
        dinoursaurs here" />

    {/* History Channel */}
    <DivLine/>
    <WorkColumn number="01" title="Pawn Stars - History Channel" description="Compositor & Editor for a :30 spot of Pawn Stars."/>

    {/* Clockwork princess */}
    <DivLine/>
    <WorkColumn number="01" title="Clockwork Princess" description="3D set extension, compositing, edit work"/>


    {/* The Delta Mirror */}
    <DivLine/>
    <WorkColumn number="01" title="The Delta Mirror" description="On set VFX Coordination, composting."/>

    {/* Swiiim */}
    <DivLine/>
    <WorkColumn number="01" title="SWIIIM - All my things" description="On set VFX Coordination, 3D dynamics simulation & composting."/>


    {/* Personal */}
    <Box css={{ fontSize: '$7', fontWeight: 600, paddingBottom: 30, paddingTop: 50}}>Projects</Box>

    <DivLine/>
    <WorkColumn number="01" title="Berbix Landing" description="Redesigned their landing page to better fit their potential custeomr base"/>

    <DivLine/>
    <WorkColumn number="01" title="Nomad Greens" description="Graphic designer for "/>

    <DivLine/>
    <WorkColumn number="01" title="CAAR" description="Mile logging app that exports tax correct documents for Gig service workers"/>



    {/* Education */}
    <Box css={{ fontSize: '$7', fontWeight: 600, paddingBottom: 30, paddingTop: 50}}>Education</Box>

    <DivLine/>
    <WorkColumn number="01" title="AA - LACC" description="Management of Film productions, practical experience using all equipment.
Design and framworks of building a production and executing on it."/>

    <DivLine/>
    <WorkColumn number="01" title="Harvard CS50" description="Harvards Computer science course.
Algo, Data Structures, Memory, SQL, C, Python, HTML, CSS, JS"/>



    </Box>
  );
};

export default Timeline;
