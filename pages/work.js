import * as React from 'react'
import Layout from "../components/layout";
import Image from 'next/image'
import Box from "../components/box";
import milebot01 from '../public/images/mileBotComp01.png'
import berbix from '../public/images/comp02.png'
import greenscreen from '../public/images/greenscreen.gif'

import nomadGreensReport from '../public/images/nomadGreens_report.png'

const Work = () => {
    return (
        <Layout pageTitle="work">
            <Box css={{ fontSize: '$9'}}>Work</Box>

            <Image 
            src={berbix} 
            alt="berbix"
            loading='lazy'
             />


            <Image 
            src={nomadGreensReport} 
            alt="berbix"
            loading='lazy'
             />


            <Image 
            src={milebot01} 
            alt="mobile comp"
            loading='lazy'
             />

            <Image 
            src={greenscreen} 
            alt="mobile comp"
            loading='lazy'
             />

        </Layout>
    )
}

export default Work;