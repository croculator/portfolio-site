import Box from "../components/box";
import { TwitterLogoIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import Link from "next/link";
import Image from 'next/image'
import { ReaderIcon } from "@modulz/radix-icons";
import { styled } from '../stitches.config.ts';
import { ArrowTopRightIcon,  } from "@modulz/radix-icons";
import ArrowTopRight from "../public/arrow-top-right.svg"

const width = 600;
const height= 600;

const Card = styled('div', {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: 10,
    padding: 0,
    boxSizing: "border-box",
    overflow: "hidden",
    transition: "0.3 ease all",
    cursor: "pointer",

    '&.*': {
        transition: "0.3 ease all",
    },

    '&:img': {
        margin: 0,
        objectFit: "cover",
        display: "block",
        overflow: "hidden",

    },

    '&:hover': {
        marginTop: -0,
        color: "rgba(0, 0, 0, 0.7)",

      },
  });



const TextOverlay = styled('textoverlay', {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 600,
    paddingLeft: "1rem",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    borderRadiusBottom: 10,
    fontSize: "$7",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.9)",


  });

  const Summary = styled('div', {

  });



const ProjectCard = ({ imgSrc, imgAlt, imgWidth, imgHeight, title, url}) => {

    return(

    <>
        <Link href={url} passHref>
            <Card>
                <Image 
                    src={imgSrc}
                    alt={imgAlt}
                    objectFit='cover'
                    width={imgWidth}
                    height={imgHeight}
                    />
                    <TextOverlay> {title}</TextOverlay>
                    <Summary></Summary>
            </Card>
        </Link>
    </>
    );
};

export default ProjectCard;
