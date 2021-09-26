import Box from "../components/box";
import { TwitterLogoIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import Link from "next/link";
import Image from 'next/image'
import { ReaderIcon } from "@modulz/radix-icons";
import { styled } from '../stitches.config.ts';
import { ArrowTopRightIcon,  } from "@modulz/radix-icons";
import ArrowTopRight from "../public/arrow-top-right.svg"


const Card = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#353535',
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    padding: 0,
    margin: 0,


  });


const CardWide = styled('div', {

    display: 'flex',
    gridColumn: 'span 2',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#353535',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    padding: 0,
    margin: 0,

});




const ArtWall = ({ imgSrc, imgAlt, imgWidth, imgHeight, title, position, url}) => {

    return(

    <>
        <Card>
            <Image 
                src={imgSrc}
                alt={imgAlt}
                quality='70'
                />
        </Card>
    </>
    );
};

export default ArtWall;
