import * as React from 'react'
import Layout from "../components/layout";
import Box from "../components/box";

const Home = () => {
    return (
        <Layout pageTitle="home">
            <Box css={{ fontSize: '$9'}}>
                Hello Traveler,
            </Box>

            <Box css={{fontSize: '$5', marginTop: '$3'}}>
                My name is Michael Diaz, and you found one of many resting spots in this 
vast internet.  While you are here have a look around  
            </Box>
        </Layout>
    )
}

export default Home;