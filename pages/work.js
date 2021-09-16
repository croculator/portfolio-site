import * as React from 'react'
import Layout from "../components/layout";
import { styled } from '../stitches.config.ts';
import Image from 'next/image'
import Box from "../components/box";
import ProjectCard from "../components/projectCard";
import milebot01 from '../public/images/mileBotComp01.png'
import berbix from '../public/images/berbix_comp03.png'
import greenscreen from '../public/images/greenscreen.gif'

import nomadGreensReport from '../public/images/nomadGreens_report.png'
import nomadGreensPhoto01 from '../public/images/nomadGreens_photo01.jpg'
import nomadGreensPhoto02 from '../public/images/nomadGreens_photo02.jpg'

import blizzard01 from '../public/images/blizzard01.png'
import blizzard02 from '../public/images/blizzard02.png'
import blizzard03 from '../public/images/blizzard03.png'
import blizzardgif from '../public/images/blizzard.gif'


import bellator01 from '../public/images/bellator01.jpg'

import hungerGamesMicrosoft01 from '../public/images/hungerGamesMicrosoft.gif'

import aliceInChains01 from '../public/images/aliceInChains.gif'




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
                width: '100%' ,
                marginTop: 100,
                padding: 100,
                fontFamily: '$system'
            }}>
            <title >Work | Michael Diaz</title>

            {/* Heading summary */}
            <Box css={{  fontFamily: '$inconsolata', maxWidth: 1200 }}>
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
            <Box css={{ fontSize: '$7', fontWeight: 600, paddingBottom: 50}}>Professional Work</Box>
            {/* Row */}
            <GridMosaic>
            {/* Column */}

                <ProjectCard imgSrc={blizzardgif} imgAlt="bliz" imgWidth="600" imgHeight="600" title="Blizzard Entertainment" url="work/blizzard"/>

                <ProjectCard imgSrc={bellator01} imgAlt="bliz" imgWidth="600" imgHeight="600" title="Bellator MMA" url="work/blizzard"/>

                <ProjectCard imgSrc={hungerGamesMicrosoft01} imgAlt="bliz" imgWidth="600" imgHeight="600" title="Microsoft Hunger Games" url="work/blizzard"/>

                <ProjectCard imgSrc={nomadGreensReport} imgAlt="bliz" imgWidth="600" imgHeight="600" title="Nomad Greens" url="work/blizzard"/>

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
                src={greenscreen} 
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