import Box from "../components/box";
import { TwitterLogoIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import Link from "next/link";
import Image from 'next/image'
import { ReaderIcon } from "@modulz/radix-icons";
import { styled } from '../stitches.config.ts';
import { ArrowTopRightIcon,  } from "@modulz/radix-icons";
import ArrowTopRight from "../public/arrow-top-right.svg"
import dynamic from "next/dynamic";
import LineBreak from "../components/lineBreak";


import blizzardgif from '../public/images/blizzard04.gif'
import clockworkPrincessgif from '../public/images/clockworkPrincess01.gif'
import microsoftgif from '../public/images/microsoft01.gif'
import swiiimgif from '../public/images/swiiim01.gif'
import minecraft01gif from '../public/images/minecraft01.gif'
import aliceInChainsgif from '../public/images/aliceInChains/aliceInChains00.gif'

import VideoDetails from '../components/videoDetails'

//const MobileWork = dynamic (() => import("../components/mobileWork"));

function MotionWork () {

    return(

    <>
        <Box css={{ fontSize: '10vw', fontWeight: 600, lineHeight: 0.85, paddingTop: 10,}}>Motion</Box>
        <Box css={{ fontSize: '6vw', fontWeight: 600, lineHeight: 0.85}}>Design_</Box>
        <br/>
       <LineBreak/> 
        <Box css={{  fontFamily: 'inconsolata', color: '$gray400', paddingTop: 10,}}>03/</Box>

        <VideoDetails
            title="The Grand Tournament"
            videoUrl="https://www.youtube.com/embed/Fe7XDBtlQzg"
            description="Created 3 shots for the DLC Heartstone expansion pack.
                3D moddeled, rigged, animated characters, created dynaimcis and 
                composited together backgrounds to match main characters"
           /> 

        <VideoDetails
            title="Leoric Character Reveal"
            videoUrl="https://www.youtube.com/embed/uLmgK7udmUE"
            description="Worked on creating the title card for the character reveal 
                3D moddeled & rigged the character to give animations to an otherwise
                still picture, painted and composed background to match visual style
                in photoshop and did final comp work in nuke."
           /> 


        <VideoDetails
            title="Butcher Character Reveal"
            videoUrl="https://www.youtube.com/embed/7nUspEUVYG0"
            description="Worked on creating the title card for the character reveal 
                3D moddeled & rigged the character to give animations to an otherwise
                still picture, painted and composed background to match visual style
                in photoshop and did final comp work in nuke."
           /> 


        <VideoDetails
            title="Microsoft Surface Tabblet & Hunger games cross colab :60 spot"
            videoUrl="https://www.youtube.com/embed/aWqlO-9Uae4"
            description="Created commerical for cross promoting the new microsoft surface tablet &
                Hunger games: Catching Fire movie. Utilized Photoshop to recreate the 
                Windows OS and assembeld and animated in After Effects."
           /> 


        <VideoDetails
            title="Alice in Chains - Stone Music Video"
            videoUrl="https://www.youtube.com/embed/9KmYFY5oOvM"
            description="Supervised post production for a launch music video for the album
                The Devil Put Dinosaurs Here for Alice In Chains. Managed 3D pipeline
                from Maya to compositing in After Effects and Nuke. 3D modeled, Built
                destruction simulations and retopologized assests in Maya."
           /> 




        <VideoDetails
            title="Swiiim - All My Things music video"
            videoUrl="https://www.youtube.com/embed/FvOpQuw8UE4"
            description="On set supervision for an underwater video shoot.  Created set extension of
                raft floating on water to a full CGI ocean.  Compositied CGI and 2D assets 
                into live action footage."
           /> 

        


            <Box css={{ 
                display: 'grid', 
                gap: '1rem', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(375px, 1fr))',  
                marginBottom: 50,
                width: '100%',

            }}>






            <Box css={{display: 'table', boxSizing: 'border-box', width: '100%', marginBottom: 150,}}>


                <Box css={{float: 'none', width: 'auto',padding: 10, marginBottom: 30, '@bp1': { float: 'left', width: '50%', },}}>
                    <Image src={blizzardgif} layout='responsive' quality="70"/>
                    <Box css={{color: '$gray400', paddingBottom: 10,}}>
                        <Box>----</Box>
                    </Box>
                    <Box>
                        <Box css={{width: '80%', textAlign: 'center', margin: 'auto'}}>Created and extended 3D scenes, animated characters, and triplanar projected textures from refrence 2D art.</Box>
                    </Box>
                </Box>
        
        

                <Box css={{float: 'none', width: 'auto',padding: 10, marginBottom: 30, '@bp1': { float: 'left', width: '50%', },}}>
                    <Image src={clockworkPrincessgif} layout='responsive' quality="70"/>
                    <Box css={{color: '$gray400', paddingBottom: 10,}}>
                        <Box>----</Box>
                    </Box>
                    <Box>
                        <Box css={{width: '80%', textAlign: 'center', margin: 'auto'}}>Breakdown of 3D set extension of old London with volumetric clouds over live acion greenscreen.</Box>
                    </Box>
                </Box>



                <Box css={{float: 'none', width: 'auto',padding: 10, marginBottom: 30, '@bp1': { float: 'left', width: '50%', },}}>
                    <Image src={microsoftgif} layout='responsive' quality="70"/>
                    <Box css={{color: '$gray400', paddingBottom: 10,}}>
                        <Box>----</Box>
                    </Box>
                    <Box>
                        <Box css={{width: '80%', textAlign: 'center', margin: 'auto'}}>Recreated and animated the windows 8 OS and hunger games website in after effects.</Box>
                    </Box>
                </Box>



                <Box css={{float: 'none', width: 'auto',padding: 10, marginBottom: 30, '@bp1': { float: 'left', width: '50%', },}}>
                    <Image src={swiiimgif} layout='responsive' quality="70"/>
                    <Box css={{color: '$gray400', paddingBottom: 10,}}>
                        <Box>----</Box>
                    </Box>
                    <Box>
                        <Box css={{width: '80%', textAlign: 'center', margin: 'auto'}}>Set extention of a pool to make it look like they are in the ocean using Cinema 4D.</Box>
                    </Box>
                </Box>


                <Box css={{float: 'none', width: 'auto',padding: 10, marginBottom: 30, '@bp1': { float: 'left', width: '50%', },}}>
                    <Image src={minecraft01gif} layout='responsive' quality="70"/>
                    <Box css={{color: '$gray400', paddingBottom: 10,}}>
                        <Box>----</Box>
                    </Box>
                    <Box>
                        <Box css={{width: '80%', textAlign: 'center', margin: 'auto'}}>3D scene of a minecraft world created and rendered in Maya using arnold renderer.</Box>
                    </Box>
                </Box>


                <Box css={{float: 'none', width: 'auto',padding: 10, marginBottom: 30, '@bp1': { float: 'left', width: '50%', },}}>
                    <Image src={aliceInChainsgif} layout='responsive' quality="70"/>
                    <Box css={{color: '$gray400', paddingBottom: 10,}}>
                        <Box>----</Box>
                    </Box>
                    <Box>
                        <Box css={{width: '80%', textAlign: 'center', margin: 'auto'}}>Recreated Actors as 3D statutes, used dynamics to crumble them all in Maya.</Box>
                    </Box>
                </Box>



                </Box>
            </Box>
    </>
    );
};

export default MotionWork;
