import Box from "../components/box";
import Link from "next/link";
import { styled } from '../stitches.config.ts';
import Image from 'next/image'



const VideoDetails = ({ videoUrl, title, description, }) => {
  return (
    <>
            <Box css={{position: 'relative', paddingBottom: '56.25%', height: 0,}}>
            <Box as="iframe" src={videoUrl} css={{ position: 'absolute', height: '100%', width: '100%',}}></Box>
            </Box>

            <Box css={{display: 'table', boxSizing: 'border-box', width: '100%', marginBottom: 100,}}>

                <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box css={{color: '$gray400', paddingBottom: 20,}}>
                        <Box>Title</Box>
                    </Box>
                    <Box>
                        <Box>{title}</Box>
                    </Box>
                </Box>
        

                <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60, '@bp2': { float: 'left', width: '33%'  }}}>
                    <Box css={{color: '$gray400', paddingBottom: 20,}}>
                        <Box>Description</Box>
                    </Box>
                    <Box>{description}</Box> 
                </Box>

            </Box>
    </>
  );
};

export default VideoDetails;
