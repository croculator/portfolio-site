import * as React from 'react'
import Layout from "../components/layout";
import { styled } from '../stitches.config.ts';
import Image from 'next/image'
import Box from "../components/box";
import ProjectCard from "../components/projectCard";
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


const Work = () => {
    return (
        <>
            <Box css={{

                maxWidth: 1440,
                marginTop: 100,
                // padding: 0,
                // fontFamily: '$system',

                '@bp1': { 
                    width: "100%",
                    padding: 100,
                    margin: "auto",
                },
            }}>
            <title >Work | Michael Diaz</title>

            {/* Heading summary */}
            <Box css={{  
                fontFamily: '$inconsolata', 
                maxWidth: "100%", 
                height: "50vh",
                paddingLeft: 30,
                    '@bp1': { 
                        maxWidth: "80%",
                        paddingTop: "10vh"
                    },
                }}>
                <Box as="div" css={{ fontSize: "$9", display: "inline-block",}}>Hi! </Box>
                <Box as="mark" css={{  color: "orange", backgroundColor: "transparent", fontSize: "$9", display: "inline-block", paddingLeft: 10, paddingRight: 10}}> Michael Diaz  </Box>
                <Box css={{ fontSize: "$9",display: "inline", }}>
                 here,im a product designer, programmer, & visual artist. 
                Lets build something delightful together!
                </Box>
            </Box>

            {/* Github */}
            <Box css={{
                boxSizing: 'border-box',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: 600,
                padding: 20,
                margin: 'auto',
                marginBottom: 100,
            }}>
            <Box 
                as="a" 
                href="https://github.com/mike0x10"
                css={{  borderRadius: 15, textDecoration: 'underline'}}
                ><ArrowRightIcon/> Github</Box>
            </Box>

            {/* Portfolio grid */}
            <Box css={{ fontSize: '$8', fontWeight: 600, paddingBottom: 10, paddingLeft: 20}}>3D & Motion Graphics</Box>
            <Box css={{ fontSize: '$6', fontWeight: 400, paddingBottom: 20, paddingLeft: 20, width: "100%", '@bp1': {width: "50%"}}}>
                3D & Motion Graphics is defined by the act of creating assests either 2D stylized assets in illustrator or photoshop,
                3D from maya or C4D, or photoreal assets from cameras.  Which after you take it into your motion compositing 
                programing either After effects or Nuke.
                </Box>

            {/* Row */}
            <GridMosaic>
            {/* Column */}
                <ProjectCard imgSrc={blizzardgif} imgAlt="bliz" imgWidth="600" imgHeight="600" title="Blizzard Entertainment" position="3D Motion Artist II" url="work/blizzard"/>

                <ProjectCard imgSrc={hungerGamesMicrosoft01} imgAlt="bliz" imgWidth="600" imgHeight="600" title="Microsoft Hunger Games" position="Motion Graphics Artist" url="work/blizzard"/>

                <ProjectCard imgSrc={aliceInChains01} imgAlt="bliz" imgWidth="600" imgHeight="600" title="Alice In Chains" position="Post Production Supervisor" url="work/blizzard"/>

                <ProjectCard imgSrc={nomadGreensReport} imgAlt="bliz" imgWidth="600" imgHeight="600" title="Pawn Stars" position="Compositor" url="work/blizzard"/>

                <ProjectCard imgSrc={clockworkPrincess01} imgAlt="bliz" imgWidth="600" imgHeight="600" title="Clockwork Princess" position="Comp & dynamics artist" url="work/blizzard"/>

                <ProjectCard imgSrc={swiiim01} imgAlt="bliz" imgWidth="600" imgHeight="600" title="SWIIIM" position="Comp & dynamics artist" url="work/blizzard"/>

            </GridMosaic>


            {/* Portfolio grid */}
            <Box css={{ fontSize: '$8', fontWeight: 600, paddingBottom: 20, paddingTop: 100}}>Print and Graphic Design</Box>
            {/* Row */}
            <GridMosaic>
            {/* Column */}

                <ProjectCard imgSrc={bellator01} imgAlt="bliz" imgWidth="600" imgHeight="600" title="Bellator MMA" position="Graphic Designer" url="work/blizzard"/>

                <ProjectCard imgSrc={nomadGreensReport} imgAlt="bliz" imgWidth="600" imgHeight="600" title="Nomad Greens" position="Graphic Designer" url="work/blizzard"/>

                <ProjectCard imgSrc={milebot01} imgAlt="bliz" imgWidth="600" imgHeight="600" title="CAAR app" position="Graphic Designer" url="work/blizzard"/>

                <ProjectCard imgSrc={berbix} imgAlt="bliz" imgWidth="600" imgHeight="600" title="Berbix Landing Redesign" position="Graphic Designer" url="work/blizzard"/>

            </GridMosaic>


            {/* <Timeline/> */}


            <Box css={{ padding: 30}}></Box>
                {/* berfix */}

                <Box css={{ fontSize: '$8', fontWeight: 600,}}>Berbix Landing Redesign</Box> 
                <Box css={{fontSize: '$5', marginTop: '$3', fontWeight: 300, width: 500}}>
                    Berbix is a Startup that is focusing on verifiying users for sensitive products for 
                    other comapnies by providing an API to intergrate into their tech stack.


                </Box>

                <Box css={{ padding: 10}}></Box>
                <Image 
                src={berbix} 
                alt="berbix"
                loading='lazy'
                />
                <Box css={{ padding: 30}}></Box>

                {/* Nomad Greens Quarterly Report */}

                <Box css={{ fontSize: '$8', fontWeight: 600,}}>Nomad Greens Annual Report</Box> 
                <Box css={{fontSize: '$5', marginTop: '$3', fontWeight: 300, width: 500}}>
                    Nomad Greens is a tech startup focusing on growing the most nutritious food that is 
                    affordable and can grow in any climate or enviroment.  
                </Box>

                <Image 
                src={nomadGreensReport} 
                alt="berbix"
                loading='lazy'
                />
                
                <Box css={{ display: 'table'}}>
                    <Box css={{ float: 'left', width: '50%', padding: 10,}}>
                        <Image 
                        src={nomadGreensPhoto01} 
                        alt="berbix"
                        loading='lazy'
                        />

                    </Box>

                    <Box css={{ float: 'left', width: '50%', padding: 10,}}>

                    <Image 
                    src={nomadGreensPhoto02} 
                    alt="berbix"
                    loading='lazy'
                    />
                    </Box>
                    
                </Box>



                <Box css={{ padding: 10}}></Box>

                {/* Milebot App Mock */}
                <Image 
                src={milebot01} 
                alt="mobile comp"
                loading='lazy'
                />
                <Box css={{ padding: 10}}></Box>


                <Image 
                src={clockworkPrincess01} 
                alt="mobile comp"
                loading='lazy'
                layout='responsive'
                />
                <Box css={{ padding: 10}}></Box>
            </Box>
            <Nav/>
            <Footer/>
        </>
    )
}

export default Work;