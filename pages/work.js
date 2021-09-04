import * as React from 'react'
import Layout from "../components/layout";
import Image from 'next/image'
import Box from "../components/box";
import milebot01 from '../public/images/mileBotComp01.png'
import berbix from '../public/images/berbix_comp03.png'
import greenscreen from '../public/images/greenscreen.gif'

import nomadGreensReport from '../public/images/nomadGreens_report.png'
import nomadGreensPhoto01 from '../public/images/nomadGreens_photo01.jpg'
import nomadGreensPhoto02 from '../public/images/nomadGreens_photo02.jpg'
import Link from "next/link";
import Nav from "../components/nav"
import Footer from "../components/footer";

const Work = () => {
    return (
        <>
            <Box css={{
                width: '100%' ,
                marginTop: 100,
                padding: 100
            }}>
            <Box css={{ fontSize: '$9', fontWeight: 600,}}>Work</Box>
            <Box css={{ padding: 30}}></Box>
                {/* berfix */}

                <Box css={{ fontSize: '$8', fontWeight: 600,}}>Berbix Landing Redesign</Box> 
                <Box css={{fontSize: '$5', marginTop: '$3', fontWeight: 300, width: 500}}>
                    Berbix is a Startup that is focusing on verifiying users  
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
                <Box css={{fontSize: '$5', marginTop: '$3', fontWeight: 300,}}>
                    Berbix is a Startup that is focusing on verifiying users  
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