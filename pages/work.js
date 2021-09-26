import * as React from 'react'
import Layout from "../components/layout";
import { styled } from '../stitches.config.ts';
import Image from 'next/image'
import Box from "../components/box";
import ProjectCard from "../components/projectCard";
import ArtWall from "../components/artWall";
import WorkColumn from "../components/workColumn";
import WorkCard from "../components/workCard";
import LineBreak from "../components/lineBreak";

import milebot01 from '../public/images/mileBotComp01.png'
import berbix from '../public/images/berbix_comp03.png'
import clockworkPrincess01 from '../public/images/clockworkPrincess01.gif'

import nomadGreensReport from '../public/images/nomadGreens_report.png'
import nomadGreensPhoto01 from '../public/images/nomadGreens_photo01.jpg'
import nomadGreensPhoto02 from '../public/images/nomadGreens_photo02.jpg'

import blizzard01 from '../public/images/blizzard01.png'
import blizzard02 from '../public/images/blizzard02.png'
import blizzard03 from '../public/images/blizzard03.png'
import blizzardgif from '../public/images/blizzard04.gif'


import bellator01 from '../public/images/bellator01.jpg'

import hungerGamesMicrosoft01 from '../public/images/microsoft01.gif'

import aliceInChains01 from '../public/images/aliceInChains01.gif'

import swiiim01 from '../public/images/swiiim01.gif'


import Link from "next/link";
import Nav from "../components/nav"
import Footer from "../components/footer";
import Timeline from '../components/timeline';
import { UnderlineIcon, ArrowRightIcon } from '@modulz/radix-icons';



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

const Work = () => {
    return (
        <>
            <Box css={{
                    width: "100%",
                    padding: 0,
                    marginLeft: 20,
                    marginTop: 100,
                    marginRight: 20,
                '@bp1': { 
                maxWidth: 1200,
                    margin: 'auto',
                    marginTop: 100,
                },
            }}>
            <title >Work | Michael Diaz</title>

            {/* Heading summary */}
            <Box css={{  
                fontFamily: '$inconsolata', 
                maxWidth: "100%", 
                paddingBottom: 100,
                    '@bp1': { 
                        margin: 0,
                        maxWidth: "100%",
                        paddingTop: "5vh"
                    },
                }}>
                <Box css={{ fontSize: "$8"  }}>Michael Diaz</Box>
                <Box css={{ fontSize: "$5",width: '70%', marginBottom: 50}}>
        Michael Diaz is a visual artist and programmer located  in Los Angeles, CA specializing in graphic design, 
motion design, 3D work in maya and C4D, user interfaces,  web design, and front end development. Michael studied 
film post produciton at Los Angeles City. He is certified programmer by Harvards CS50.
                </Box>
                <Box css={{ fontFamily: '$system',fontSize: '10vw', fontWeight: 600, lineHeight: 0.85  }}>Selected</Box>
                <Box css={{ fontFamily: '$system', fontSize: '10vw', fontWeight: 600, lineHeight: 0.85}}>Projects_</Box>
            </Box>



            
            <Box css={{ 
                display: 'grid', 
                gap: '1rem', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(375px, 1fr))',  
                marginBottom: 140,

            }}>
                <WorkCard 
                    number="001"
                    title="Graphic Designer" 
                    job="Nomad Greens" 
                    date="Year 2020-2021"
                    description="Designed imagery for produce packaging, created art for social media,
                    photographed produce products for branding and marketing & built internal
                    document design for meetings and internal use." 
                />

                <WorkCard 
                    number="001"
                    title="graphic designer" 
                    job="Bellator MMA" 
                    date="Year 2017-2018"
                    description="created title cards, lower thirds & assorted graphics when the 
                    commentators compare the 2 fighers together on TV, also created 
                    in stadium promotion flyers, banners, and posters folllowing 
                    Bellators Design Style Guides." 
                />


                <WorkCard 
                    number="001"
                    title="Graphic Designer" 
                    job="Blizzard Entertainment" 
                    date="Year 2015-2016"
                    description="Developed 4 campaigns - pre-rendered cinematics 
                    for in game cut- scenes and promotional content. 
                    Built stylized 3D scenes from  hand drawn 2D art. 
                    Also created motion graphic designs to supplement promotional content."
                />


                <WorkCard 
                    number="001"
                    title="Editor / Compositor" 
                    job="Pawn Stars - History Channel" 
                    date="Year 2014"
                    description="Developed 4 campaigns - pre-rendered cinematics 
                    for in game cut- scenes and promotional content. 
                    Built stylized 3D scenes from  hand drawn 2D art. 
                    Also created motion graphic designs to supplement promotional content."
                />

                
            </Box>



                <LineBreak></LineBreak>
                <Box css={{  fontFamily: 'inconsolata', color: '$gray400', paddingTop: 10,}}>02/</Box>

                <Box css={{ fontSize: '10vw', fontWeight: 600, lineHeight: 0.85, paddingTop: 70,}}>Selected</Box>
                <Box css={{ fontSize: '10vw', fontWeight: 600, lineHeight: 0.85}}>Art_</Box>
                



        



            </Box>
            <Nav/>
            <Footer/>
        </>
    )
}

export default Work;
