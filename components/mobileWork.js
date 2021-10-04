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

import mileBotScheduleC from "../public/images/mobile/frameMileBot_scheduleC.png";
import nftArt01 from "../public/images/mobile/frame_nftArt01.png";
import nftArt02 from "../public/images/mobile/frame_nftArt02.png";
import milebot01Framed from '../public/images/mileBotComp01_framed02.png'
//const MobileWork = dynamic (() => import("../components/mobileWork"));

function MobileWork () {

    return(

    <>

        <Box css={{ fontSize: '10vw', fontWeight: 600, lineHeight: 0.85, paddingTop: 10,}}>Mobile</Box>
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


                <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60,'@bp1': { float: 'left', width: '50%', }, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Image src={mileBotScheduleC}></Image>
                    <Box css={{color: '$gray400', paddingBottom: 10,}}>
                        <Box>----</Box>
                    </Box>
                    <Box>
                        <Box css={{width: '70%', textAlign: 'center', margin: 'auto'}}>Emulating tax summary print design to easily understand expenses from app.</Box>
                    </Box>
                </Box>
        
        
                <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60,'@bp1': { float: 'left', width: '50%', }, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Image src={nftArt01} layout='responsive' quality="70"/>
                    <Box css={{color: '$gray400', paddingBottom: 10,}}>
                        <Box>----</Box>
                    </Box>
                    <Box>
                        <Box css={{width: '70%', textAlign: 'center', margin: 'auto'}}>Personal curated feed of NFT artists followed by wallet address.</Box>
                    </Box>
                </Box>


                <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60,'@bp1': { float: 'left', width: '50%', }, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Image src={nftArt02} layout='responsive' quality="70"/>
                    <Box css={{color: '$gray400', paddingBottom: 10,}}>
                        <Box>----</Box>
                    </Box>
                    <Box>
                        <Box css={{width: '70%', textAlign: 'center', margin: 'auto'}}>Artist profile created as an extention of their EIN domain name.</Box>
                    </Box>
                </Box>


                <Box css={{float: 'left', width: '100%', marginBottom: 60,}}>
                    <Image src={milebot01Framed} layout='responsive' quality="70"/>
                    <Box css={{color: '$gray400', paddingBottom: 10,}}>
                        <Box>----</Box>
                    </Box>
                    <Box>
                        <Box css={{width: '70%', textAlign: 'center', margin: 'auto'}}>Freelance tax app collage.</Box>
                    </Box>
                </Box>




            </Box>
            </Box>
    </>
    );
};

export default MobileWork;
