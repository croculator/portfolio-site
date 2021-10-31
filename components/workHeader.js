import * as React from 'react'
import Layout from "../components/layout";
import { styled } from '../stitches.config.ts';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import Image from 'next/image'
import Box from "../components/box";
import ProjectCard from "../components/projectCard";
import ArtWall from "../components/artWall";
import WorkColumn from "../components/workColumn";
import WorkCard from "../components/workCard";
import LineBreak from "../components/lineBreak";
import ResumeList from "../components/resumeList";

import milebot01 from '../public/images/mileBotComp01.png'
import milebot01Framed from '../public/images/mileBotComp01_framed02.png'
import berbix from '../public/images/berbix_comp03.png'
import clockworkPrincess01 from '../public/images/clockworkPrincess01.gif'

import nomadGreensReport from '../public/images/nomadGreens_report.png'
import nomadGreensReport_framed from '../public/images/nomadGreens_report_framed.png'
import nomadGreensPhoto01 from '../public/images/nomadGreens_photo01.jpg'
import nomadGreensPhoto02 from '../public/images/nomadGreens_photo02.jpg'

import blizzard01 from '../public/images/blizzard01.png'
import blizzard02 from '../public/images/blizzard02.png'
import blizzard03 from '../public/images/blizzard03.png'
import blizzardgif from '../public/images/blizzard04.gif'
import blizzardLogo from '../public/images/blizzardLogo.jpg'


import bellator01 from '../public/images/bellator01.jpg'

import hungerGamesMicrosoft01 from '../public/images/microsoft01.gif'

import aliceInChains00 from '../public/images/aliceInChains/aliceInChains00.gif'
import aliceInChains01 from '../public/images/aliceInChains/aliceInChains01.png'
import aliceInChains02 from '../public/images/aliceInChains/aliceInChains02.png'
import aliceInChains03 from '../public/images/aliceInChains/aliceInChains03.png'

import swiiim01 from '../public/images/swiiim01.gif'
import canooLanding from '../public/images/canooLanding01.png'

import hyperloop01 from '../public/images/hyperloopPoster_frame01.png';
import hyperloop02 from '../public/images/hyperloopPosterCollage.png';

import faceshot from '../public/images/faceshot.jpg';


import Link from "next/link";
import Nav from "../components/nav"
import Footer from "../components/footer";
import Timeline from '../components/timeline';
import { UnderlineIcon, ArrowRightIcon } from '@modulz/radix-icons';



const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 96,
  height: 96,
  borderRadius: '100%',
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '$highlighter',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

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


const ButtonLink = styled('btnlink', {

    backgroundColor: 'transparent',
    borderRadius: '99999px',
    borderColor: '$gray100',
    border: '1px solid',
    padding: 4,
    marginRight: 10,
    height: '25px',
    paddingLeft: '15px',
    paddingRight: '15px',

    '&:hover': {

        backgroundColor: 'orange',
        cursor: 'pointer',
    },
    
});



const WorkHeader = ({ children }) => {
  return (


        <>
            {/* Heading summary */}
            <Box css={{  
                maxWidth: "100%", 
                paddingBottom: 0,
                    '@bp1': { 
                        margin: 0,
                        maxWidth: "100%",
                        paddingTop: "5vh",
                        paddingBottom: "2vh"
                    },
                }}>

                <Box css={{ fontFamily: '$system',fontSize: '20vw', fontWeight: 600, lineHeight: 0.85, '@bp1': {fontSize: '12vw', } }}>Michael</Box>
                <Box css={{ fontFamily: '$system', fontSize: '10vw', fontWeight: 600, lineHeight: 0.85}}>Diaz_</Box>


                <Box css={{marginTop: '2vh', marginBottom: 10,}}>
                   <a href="https://vimeo.com/136158987"> <ButtonLink>↖ Video Demo Reel</ButtonLink></a>
                   <a href="https://www.github.com/mike0x10"> <ButtonLink>↖ Github</ButtonLink></a>
                   <a href="https://www.linkedin.com/in/michael-diaz-03b93885/"> <ButtonLink>↖ Linkedin</ButtonLink></a>
                </Box>

              <Avatar>
                <AvatarImage
                  src="https://media-exp1.licdn.com/dms/image/C5603AQE39fwf4sc7Qg/profile-displayphoto-shrink_400_400/0/1633393283786?e=1639008000&v=beta&t=V1uvLMLzAVOIN6p-wU2hIYgZmmMMhHNI3fliaiBH8Eg"
                  alt="Michael Diaz"
                />
                <AvatarFallback delayMs={600}>MD</AvatarFallback>
              </Avatar>
    
                <Box css={{display: 'table', boxSizing: 'border-box', width: '100%', marginBottom: 10,}}>

                    <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60, '@bp2': { float: 'left', width: '50%'  }}}>
                        <Box css={{color: '$gray400', paddingBottom: 5,}}>
                            <Box>Info</Box>
                        </Box>
                        <Box>
                            <Box css={{ fontSize: "$5",width: '100%', marginBottom: '0vh', marginTop: '1vh', fontFamily: '$ibm'}}>
                            Michael Diaz is a visual artist and programmer, specializing in graphic design, 
                            motion design, UI Design, 3D work in maya and C4D, web design, and front end development. Michael studied 
                            film post produciton at Los Angeles City. He is certified programmer by Harvards CS50.
                            </Box>
                        </Box>
                    </Box>
                </Box>
                
                <iframe src="https://player.vimeo.com/video/136158987?h=029d52751f" width="100%" height="563" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

            </Box>


            <ResumeList/>
      <Box>
      {children}
      </Box>
        </>



  );
};

export default WorkHeader;
