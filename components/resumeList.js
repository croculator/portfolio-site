import Box from "../components/box";
import { TwitterLogoIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import { ReaderIcon, Link2Icon } from "@modulz/radix-icons";
import WorkColumn from "./workColumn";
import LineBreak from "./lineBreak";
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



const ResumeList = ({ }) => {
  return (

    
    <Box css={{ fontFamily: '$ibm' }}> 
      
        <Box css={{ fontFamily: 'sans-serif',fontSize: '$6', fontWeight: '400',}}>Programming Work List</Box>

        <WorkColumn num="02." title="This Website → Nextjs, React, Css" year="2021"/>

        <WorkColumn num="01."  title="CAAR → Native iOS App + UI / UX Design" year="2020"/>




        <Box css={{ fontFamily: 'sans-serif', fontSize: '$6', marginTop: 50  }}> Visual Design Work List</Box>

        <WorkColumn num="14." title="Nomad Greens → Graphic Designer" year="2021"/>

        <WorkColumn num="13." title="CAAR → UI App Designer" year="2020"/>

        <WorkColumn num="12." title="Bellator MMA → Graphic Designer" year="2018"/>

        <WorkColumn num="11." title="Blizzard Entertainment → Motion Graphics ||" year="2016"/>

        <WorkColumn num="10."title="Microsoft Surface - Hunger Games → Motion Graphics / Compositor" year="2014"/>

        <WorkColumn num="09."title="Pawn Stars → Editor / Compositor" year="2014"/>

        <WorkColumn num="08." title="Alice In Chains - Stone → Post Production Supervisor" year="2014"/>
        
        <WorkColumn num="07." title="Virgin Galatic / Tag Heuer → Effects Simulation" year="2014"/>

        <WorkColumn num="06." title="Buzkashi Boys → DCP Compressor" year="2014"/>

        <WorkColumn num="05." title="Angles Perch → Credits Editor" year="2014"/>

        <WorkColumn num="03." title="SWIIIM → Compositor " year="2013"/>

        <WorkColumn num="02." title="The Delta Mirror → Compositor " year="2013"/>

        <WorkColumn num="04." title="Boregore → Dynamics Simulation" year="2013"/>

        <WorkColumn num="01." title="Clockwork Princess → 3D / Set Extension" year="2012"/>




        <Box css={{ fontFamily: 'sans-serif', fontSize: '$6', marginTop: 50,  }}>Education</Box>

        <WorkColumn num="02." title="Harvard CS50 → Algorithims, Data structures, Memory, Front-End" year="2016"/>

        <WorkColumn num="01." title="LACC AA → Film Production Visual Design" year="2012"/>


    </Box>
  );
};

export default ResumeList;
