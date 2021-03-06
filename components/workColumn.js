import Box from "../components/box";
import Link from "next/link";
import { styled } from '../stitches.config.ts';

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


const WorkColumn = ({ num, title, year,}) => {
  return (
    <>
      {/*

    <Box css={{ display: 'flex', justifyContent: 'space-between', marginTop: 15, marginBottom: 15}}>
        <Box>{num} {title}</Box>
        <Box css={{   }}>{year}</Box>
    </Box>
          */}

    <Box css={{ 
        gridColumnStart: 1, 
        gridColumnEnd: '-1', 
        display: 'grid', 
        gridTemplateColumns: 'auto 1fr auto', 
        alignItems: 'center', 
        marginTop: 20, 
        marginBottom: 30, 

            '@bp1': { 
                marginTop: 0, 
                marginBottom: 0, 
            }}}>

        <Box css={{
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                animation: 'typing 4s steps(15, end)',
                display: 'inline-block',
                backgroundImage:'linear-gradient(to right, rgba(255,255,255,0) 50%, #214eef 0%)', 
                backgroundPosition: '-0%', 
                backgroundSize: '200% auto', 
                transition: 'all 150ms ease-out',
                paddingTop: 3,
                paddingBottom: 3,
                letterSpacing: '0.5px',

                    '&:hover': { 
                        backgroundPosition: '-100%', 
                        color: 'white'
                    }, 

                    '@keyframes typing': {

                        from: { width: 100 },
                        to: { width: 0 },
                    },



        }}>{num} {title}</Box>
        <Box css={{margin: 10, height: 1, background: '$gray500'}}></Box>
        <Box css={{   }}>{year}</Box>
    </Box>

    </>
  );
};

export default WorkColumn;
