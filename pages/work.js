import * as React from 'react'
import { useState } from "react";
import Layout from "../components/layout";
import { styled } from '../stitches.config.ts';
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

import Link from "next/link";
import Nav from "../components/nav"
import Footer from "../components/footer";
import Timeline from '../components/timeline';
import { UnderlineIcon, ArrowRightIcon } from '@modulz/radix-icons';
import dynamic from "next/dynamic";


import WorkHeader from '../components/workHeader';



const GridMosaic = styled('gridmosaic', {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gridAutoRows: "auto",
  })



const ArtDump = styled('artdump', {
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gridAutoRows: "400px",
    columnGap: '0px',
  })

const CardImg = styled('div', {

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#353535',
    width: '90vw',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    padding: 0,
    margin: 0,
    marginRight: '100px',

});

const CardWide = styled('div', {

    display: 'flex',
    gridColumn: 'span 2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#353535',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    padding: 0,
    margin: 0,

});


const CardLarge = styled('div', {

    display: 'flex',
    gridColumn: 'span 3',
    gridRow: 'span 2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FAFAFA',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    padding: 0,
    margin: 0,

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

const MobileWork = dynamic (() => import("../components/mobileWork"));
const MotionWork = dynamic (() => import("../components/motionWork"));
const GraphicDesign = dynamic (() => import("../components/graphicDesign"));

const WebDesign= dynamic (() => import("../components/webDesign"));

const Work = ({ }) => {
    const [mobileWork, setMobileWork] = useState(false);
    const [motionWork, setMotionWork] = useState(false);


    return (
        <>

        <Box css={{backgroundColor: '#F7F7F7',}}>
            <Box css={{
                    width: "100%",
                    padding: 0,
                    marginLeft: 20,
                    marginRight: 20,
                    paddingRight: 20,
                '@bp1': { 
                    maxWidth: 1000,
                    margin: 'auto',
                },
            }}>

                <WorkHeader> 

        {/*
                    <Box css={{marginTop: '2vh', marginBottom: 10,}}>
                        <ButtonLink onClick={() => setMobileWork((trigger) => !trigger)}>↖ Mobile Work</ButtonLink>
                        <ButtonLink onClick={() => setMotionWork((pV) => !pV)}>↖ Motion Work</ButtonLink>
                    </Box>

                    <Box> {mobileWork ? <MobileWork/> : null } </Box>
                    <Box> {motionWork ? <MotionWork/> : null } </Box>
        */}
                <Box css={{marginTop: 100}}>.</Box>
                <GraphicDesign/>
                <MotionWork/>
                <MobileWork/>
                <WebDesign/>
                
                </WorkHeader>
            </Box>
        </Box>
        </>
    )
}

export default Work;
