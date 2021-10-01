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

const Work = () => {
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
                    maxWidth: 1200,
                    margin: 'auto',
                },
            }}>
            <title >Work | Michael Diaz</title>

            {/* Heading summary */}
            <Box css={{  
                maxWidth: "100%", 
                paddingBottom: 0,
                    '@bp1': { 
                        margin: 0,
                        maxWidth: "100%",
                        paddingTop: "5vh",
                        paddingBottom: "0vh"
                    },
                }}>

                <Box css={{ fontFamily: '$system',fontSize: '20vw', fontWeight: 600, lineHeight: 0.85, '@bp1': {fontSize: '16vw', } }}>Michael</Box>
                <Box css={{ fontFamily: '$ibm', fontSize: '10vw', fontWeight: 600, lineHeight: 0.85}}>Diaz_</Box>

                <Box css={{marginTop: '2vh', marginBottom: 10,}}>
                   <a href="https://www.github.com/mike0x10"> <ButtonLink>↖ Github</ButtonLink></a>
                   <a href="https://www.linkedin.com/in/michael-diaz-03b93885/"> <ButtonLink>↖ Linkedin</ButtonLink></a>
                </Box>
    
            <Box css={{display: 'table', boxSizing: 'border-box', width: '100%', marginBottom: 10,}}>

                <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60, '@bp2': { float: 'left', width: '50%'  }}}>
                    <Box css={{color: '$gray400', paddingBottom: 5,}}>
                        <Box>Info</Box>
                    </Box>
                    <Box>
                        <Box css={{ fontSize: "$5",width: '100%', marginBottom: '0vh', marginTop: '1vh', fontFamily: '$ibm'}}>
                        Michael Diaz is a visual artist and programmer located  in Los Angeles, CA specializing in graphic design, 
                        motion design, UI Design, 3D work in maya and C4D, web design, and front end development. Michael studied 
                        film post produciton at Los Angeles City. He is certified programmer by Harvards CS50.
                        </Box>
                    </Box>
                </Box>
        </Box>




            </Box>



                <ResumeList/>
            
                <Box css={{  fontFamily: 'inconsolata', color: '$gray400', paddingTop: 100,}}>01/</Box>
                <Box css={{ fontFamily: '$system',fontSize: '20vw', fontWeight: 600, lineHeight: 0.85, '@bp1': {fontSize: '10vw', } }}>Selected</Box>
                <Box css={{ fontFamily: '$system', fontSize: '6vw', fontWeight: 600, lineHeight: 0.85}}>Projects_</Box>

            <Box css={{ 
                display: 'grid', 
                gap: '1rem', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(375px, 1fr))',  
                marginBottom: 50,
                width: '100%',

            }}>
        {/*         <WorkCard 
                    number="001"
                    title="Graphic Designer" 
                    job="Nomad Greens" 
                    date="Year 2020-2021"
                    description="Designed imagery for produce packaging, created art for social media,
                    photographed produce products for branding and marketing & built internal
                    document design for meetings and internal use." 
                />

        */}
                <WorkCard 
                    number="001"
                    title="graphic designer" 
                    job="Bellator MMA" 
                    date="Year 2017-2018"
                    description="created title cards, lower thirds & assorted graphics when the 
                    commentators compare the 2 fighers together on TV, also created 
                    in stadium promotion flyers, banners, and posters folllowing 
                    Bellators Design Style Guides." 
                    img={bellator01}
                />


                <WorkCard 
                    number="002"
                    title="Graphic Designer" 
                    job="Blizzard Entertainment" 
                    date="Year 2015-2016"
                    description="Developed 4 campaigns - pre-rendered cinematics 
                    for in game cut- scenes and promotional content. 
                    Built stylized 3D scenes from  hand drawn 2D art. 
                    Also created motion graphic designs to supplement promotional content."
                    img={blizzardLogo}
                />

        {/*

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

            */}
                
            </Box>
        



                <br/>
                <Box css={{paddingTop: 150}}></Box>
                <LineBreak></LineBreak>
                <Box css={{  fontFamily: 'inconsolata', color: '$gray400', paddingTop: 10,}}>02/</Box>

                <Box css={{ fontSize: '10vw', fontWeight: 600, lineHeight: 0.85, paddingTop: 10,}}>Selected</Box>
                <Box css={{ fontSize: '10vw', fontWeight: 600, lineHeight: 0.85}}>Art_</Box>
                
        

                <Box css={{marginBottom: 100}}/>

                <LineBreak></LineBreak>
                <Image src={milebot01Framed} layout='responsive' quality="70"/>

                <Box css={{display: 'table', boxSizing: 'border-box', width: '100%', marginBottom: 50,}}>

                    <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60, '@bp2': { float: 'left', width: '33%'  }}}>
                        <Box css={{color: '$gray400', paddingBottom: 20,}}>
                            <Box>Title</Box>
                        </Box>
                        <Box>
                            <Box>CAAR</Box>
                        </Box>
                    </Box>
                    <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60, '@bp2': { float: 'left', width: '33%'  }}}>
                        <Box css={{color: '$gray400', paddingBottom: 20,}}>
                            <Box>Summary</Box>
                        </Box>
                        <Box>
                            <Box>iOS contact sheet showcasing the apps unique theme</Box>
                        </Box>
                    </Box>
                </Box>



                <LineBreak></LineBreak>
                <Image src={nomadGreensReport_framed} layout='responsive' quality="70"/>
                <br/>
                <Image src={hyperloop02} layout='responsive' quality="70"/>
                <br/>
                <Image src={hungerGamesMicrosoft01} layout='responsive' quality="70"/>
                <br/>
                <Image src={bellator01} layout='responsive' quality="70"/>
                <br/>
                <Image src={blizzardgif} layout='responsive' quality="70"/>
                <br/>
                <Image src={aliceInChains01} layout='responsive' quality="70"/>
                <br/>
                <Image src={aliceInChains02} layout='responsive' quality="70"/>
                <br/>
                <Image src={aliceInChains03} layout='responsive' quality="70"/>
                <br/>
                <Image src={canooLanding} layout='responsive' quality="70"/>
                <br/>
                <br/>
        



            </Box>
        
            <Footer/>
        </Box>
        </>
    )
}

export default Work;
