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


import attentionEconomy from "../public/images/web/attentionEconomy_framed.png";
import mileBotFrame from "../public/images/web/milebotFrame01copy.png"; 


function GraphicDesign () {

    return(

    <>

        <Box css={{ fontSize: '10vw', fontWeight: 600, lineHeight: 0.85, paddingTop: 10,}}>Web</Box>
        <Box css={{ fontSize: '6vw', fontWeight: 600, lineHeight: 0.85}}>Design_</Box>
        <br/>
       <LineBreak/> 
        <Box css={{  fontFamily: 'inconsolata', color: '$gray400', paddingTop: 10,}}>02/</Box>

            <Box css={{ 
                display: 'grid', 
                gap: '1rem', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(375px, 1fr))',  
                marginBottom: 50,
                width: '100%',

            }}>

            <Box css={{display: 'table', boxSizing: 'border-box', width: '100%', marginBottom: 150, textAlign: 'center',}}>


                <Box css={{float: 'left', width: '100%', marginBottom: 60,}}>
                    <Image src={mileBotFrame} layout='responsive' quality="70"/>
                    <Box css={{color: '$gray400', paddingBottom: 10,}}>
                        <Box>----</Box>
                    </Box>
                    <Box>
                        <Box css={{width: '70%', textAlign: 'center', margin: 'auto'}}>Design Agency Landing Page.</Box>
                    </Box>
                </Box>




                <Box css={{float: 'left', width: '100%', marginBottom: 60,}}>
                    <Image src={attentionEconomy} layout='responsive' quality="70"/>
                    <Box css={{color: '$gray400', paddingBottom: 10,}}>
                        <Box>----</Box>
                    </Box>
                    <Box>
                        <Box css={{width: '70%', textAlign: 'center', margin: 'auto'}}>Design Agency Landing Page.</Box>
                    </Box>
                </Box>







            </Box>
        </Box>
    </>
    );
};

export default GraphicDesign;
