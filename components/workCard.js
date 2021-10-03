import Box from "../components/box";
import Link from "next/link";
import { styled } from '../stitches.config.ts';
import Image from 'next/image'

const NavElement = styled('navelement', {
    borderRadius: '$round',
    fontSize: '$5',
    padding: '$2 $3',
    border: '2px solid $turq',
    color: '$gray100',
    fontWeight: 400,

    '&:hover': {
      backgroundColor: '$turq',
      color: '$black',
    },
  });

const Line = styled('line', {

    border: 'none',
    height: '1px',
    backgroundColor: '$gray100',
    color: 'black',
});



const WorkCard = ({ number, title, job, date, description, url, img}) => {
  return (
    <>
      <Link href="/work/blizzard">
        <Box css={{ 
            paddingRight: 0, 
            maxWidth: 375, 
            lineHeight: 1.15, 
            marginRight: 10,
            marginBottom: 50,

            '&:hover': {

                cursor: 'pointer',
            },

           '@bp1': {

               maxWidth: '100%',
               width: '100%',
               margin: 0,
               marginRight: 20,
                marginBottom: 80,
           }
        }}>
            <Box css={{ fontSize: 28, marginBottom: -5, color: 'black'}}>{number}</Box>
      
            <Line as="hr"></Line>
            <Image src={img}></Image>
            <Box css={{display: 'table', boxSizing: 'border-box', width: '100%', marginBottom: 0,}}>

                <Box css={{float: 'none', width: 'auto', marginTop: 0, marginBottom: 60, '@bp2': { float: 'left', width: '50%'  }}}>
                    <Box css={{fontSize: 16, fontWeight: '600', fontSize: '$7'}}>{job}</Box>
                    <Box css={{ width: '250px', marginTop: 5, fontSize: '$7', fontWeight: 400 }}>{title}</Box>
                    <Box css={{fontSize: 16, paddingBottom: 10,}}>{date}</Box>
                </Box> 
                <Box css={{float: 'none', width: 'auto', marginTop: 40, marginBottom: 60, '@bp2': { float: 'left', width: '50%'  }}}>
                    <Box css={{ textDecoration: 'underline', padding: 5}}>↳More Info</Box>
                </Box> 
            </Box>
            <Box css={{ fontSize: '$6', fontFamily: 'sans-serif', color: '$gray100', paddingTop: 0}}>{description}</Box>

        </Box>
      </Link>
    </>
  );
};

export default WorkCard;
