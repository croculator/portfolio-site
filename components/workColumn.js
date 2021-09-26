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

const WorkColumn = ({ title, year,}) => {
  return (
    <>

    <Box css={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, marginBottom: 10}}>
        <Box>{title}</Box>
        <Box css={{   }}>{year}</Box>
    </Box>


    </>
  );
};

export default WorkColumn;
