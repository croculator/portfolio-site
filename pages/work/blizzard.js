import * as React from 'react'
import Layout from "../../components/layout";
import Box from "../../components/box";
import { ArrowTopRightIcon,  } from "@modulz/radix-icons";
import LineBreak from "../../components/lineBreak";
import blizzardLogo from "../../public/images/blizzardLogo.jpg"
import Image from 'next/image'

const Blizzard = () => {
    return (
        <Layout pageTitle="Blizzard">

            <LineBreak as="hr"css={{ }}/>
            <Box css={{  fontFamily: 'inconsolata', color: '$gray400', paddingTop: 10,}}>01/</Box>


            <Box css={{ fontSize: "$10"}}>Blizzard Entertainment</Box>
            <Image src={blizzardLogo} layout='responsive' quality="70"/>

            <Box css={{display: 'table', boxSizing: 'border-box', width: '100%', marginBottom: 150,}}>

                <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box css={{color: '$gray400', paddingBottom: 20,}}>
                        <Box>Title</Box>
                    </Box>
                    <Box>
                        <Box>Motion Graphics Artist ||</Box>
                        <Box>2015-2016</Box>
                    </Box>
                </Box>
        
                <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box css={{color: '$gray400', paddingBottom: 20,}}>
                        <Box>Links</Box>
                    </Box>
                    <Box>
                        <Box>Motion Graphics Artist ||</Box>
                        <Box>2015-2016</Box>
                    </Box>
                </Box>


                <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box css={{color: '$gray400', paddingBottom: 20,}}>
                        <Box>Description</Box>
                    </Box>
                    <Box>I was working on the cinematics team 
                    building promotional media for hearthstone
                    and heros of the stone.  This media was
                    showing in ingame cut scenes and presented
                    on youtube.</Box>
                </Box>

            </Box>


        
            <LineBreak as="hr"css={{ }}/>
            <Box css={{  fontFamily: 'inconsolata', color: '$gray400', paddingTop: 10,}}>02/</Box>

            <Box css={{ fontSize: "$10"}}>Grand Tournament</Box>
            <Box css={{ fontSize: "$10"}}>Hearthstone</Box>

            <Box css={{position: 'relative', paddingBottom: '56.25%', height: 0,}}>
            <Box as="iframe" src="https://www.youtube.com/embed/Fe7XDBtlQzg" css={{ position: 'absolute', height: '100%', width: '100%',}}></Box>
            </Box>

            <Box css={{display: 'table', boxSizing: 'border-box', width: '100%', marginBottom: 150,}}>

                <Box css={{float: 'none', width: 'auto', marginTop: 40, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box>Motion Graphics Artist ||</Box>
                    <Box>2015-2016</Box>
                </Box>
        
                <Box css={{float: 'none', width: 'auto', marginTop: 40, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box>Motion Graphics Artist ||</Box>
                    <Box>2015-2016</Box>
                </Box>

                <Box css={{float: 'none', width: 'auto', marginTop: 40, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box>I was working on the cinematics team 
                    building promotional media for hearthstone
                    and heros of the stone.  This media was
                    showing in ingame cut scenes and presented
                    on youtube.</Box>
                </Box>

            </Box>



            <LineBreak as="hr"css={{ }}/>
            <Box css={{  fontFamily: 'inconsolata', color: '$gray400', paddingTop: 10,}}>03/</Box>

            <Box css={{ fontSize: "$10"}}>Leoric</Box>
            <Box css={{ fontSize: "$10"}}>Heroes of the Storm</Box>

            <Box css={{position: 'relative', paddingBottom: '56.25%', height: 0,}}>
            <Box as="iframe" src="https://www.youtube.com/embed/uLmgK7udmUE" css={{ position: 'absolute', height: '100%', width: '100%',}}></Box>
            </Box>

            <Box css={{display: 'table', boxSizing: 'border-box', width: '100%', marginBottom: 150,}}>

                <Box css={{float: 'none', width: 'auto', marginTop: 40, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box>Motion Graphics Artist ||</Box>
                    <Box>2015-2016</Box>
                </Box>
        
                <Box css={{float: 'none', width: 'auto', marginTop: 40, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box>Motion Graphics Artist ||</Box>
                    <Box>2015-2016</Box>
                </Box>

                <Box css={{float: 'none', width: 'auto', marginTop: 40, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box>I was working on the cinematics team 
                    building promotional media for hearthstone
                    and heros of the stone.  This media was
                    showing in ingame cut scenes and presented
                    on youtube.</Box>
                </Box>

            </Box>







            <LineBreak as="hr"css={{ }}/>
            <Box css={{  fontFamily: 'inconsolata', color: '$gray400', paddingTop: 10,}}>04/</Box>

            <Box css={{ fontSize: "$10"}}>Grand Tournament</Box>
            <Box css={{ fontSize: "$10"}}>Hearthstone</Box>

            <Box css={{position: 'relative', paddingBottom: '56.25%', height: 0,}}>
            <Box as="iframe" src="https://www.youtube.com/embed/7nUspEUVYG0" css={{ position: 'absolute', height: '100%', width: '100%',}}></Box>
            </Box>

            <Box css={{display: 'table', boxSizing: 'border-box', width: '100%', marginBottom: 150,}}>

                <Box css={{float: 'none', width: 'auto', marginTop: 40, '@bp2': { float: 'left', width: '33%'  }}}>
        
                    <Box>Motion Graphics Artist ||</Box>
                    <Box>2015-2016</Box>
                </Box>
        
                <Box css={{float: 'none', width: 'auto', marginTop: 40, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box>Motion Graphics Artist ||</Box>
                    <Box>2015-2016</Box>
                </Box>


                <Box css={{float: 'none', width: 'auto', marginTop: 40, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box>I was working on the cinematics team 
                    building promotional media for hearthstone
                    and heros of the stone.  This media was
                    showing in ingame cut scenes and presented
                    on youtube.</Box>
                </Box>

            </Box>







                <LineBreak as="hr"css={{ }}/>
                <Box css={{  fontFamily: 'inconsolata', color: '$gray400', paddingTop: 10,}}>02/</Box>

        </Layout>
    )
}

export default Blizzard;
