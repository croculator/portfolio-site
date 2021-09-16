import * as React from 'react'
import Layout from "../../components/layout";
import Box from "../../components/box";
import { ArrowTopRightIcon,  } from "@modulz/radix-icons";


const Blizzard = () => {
    return (
        <Layout pageTitle="Blizzard">
            <Box css={{ fontSize: "$8"}}>Blizzard Entertainment</Box>
            <Box>3D Moddler, Motion Graphic artist</Box>

            <Box as="iframe" src="https://www.youtube.com/embed/Fe7XDBtlQzg" css={{ height: 338, width: 600,}}></Box>
            <Box as="iframe" src="https://www.youtube.com/embed/uLmgK7udmUE" css={{ height: 338, width: 600,}}></Box>
            <Box as="iframe" src="https://www.youtube.com/embed/7nUspEUVYG0" css={{ height: 338, width: 600,}}></Box>


        </Layout>
    )
}

export default Blizzard;