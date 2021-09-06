import * as React from 'react'
import Layout from "../components/layout";
import Box from "../components/box";
import { ArrowTopRightIcon,  } from "@modulz/radix-icons";


const Home = () => {
    return (
        <Layout pageTitle="home">
            <Box css={{ fontSize: 86, fontWeight: 700,  maxWidth: 850,}}>Knock,</Box>
            <Box css={{ fontSize: 86, fontWeight: 700,  maxWidth: 850,}}>Knock,</Box>

            <Box css={{fontSize: '$5', marginTop: '$3', fontWeight: 300,}}>
               We live in interesting times, where the reality is meeting the fantasy. 
                Every day it is easier to build what we dream.  The craft of creating is ever more
                important. Our words; king, the symbols we craft spread in a instant, the tools we harness are
                indispensable

               
               Every day it is easier to build what we dream. So I ask, build what you dream and dream big.
            </Box>

            <Box css={{fontSize: '$5', marginTop: '$3', fontWeight: 300,}}>
                Hello! My name is michael diaz I am developer, designer, & artist. 
            </Box>



        </Layout>
    )
}

export default Home;