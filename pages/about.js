import * as React from 'react'
import Layout from "../components/layout";
import Box from "../components/box";

const About = () => {
    return (
        <Layout pageTitle="about">
            <Box css={{
                fontSize: 44,
            }}>
                About
            </Box>
            <p>about page</p>
        </Layout>
    )
}

export default About;