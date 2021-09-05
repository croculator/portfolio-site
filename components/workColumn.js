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

const WorkColumn = ({ number, title, description }) => {
  return (
    <>
    <Box css={{ display:'flex', justifyContent: 'flexStart', flexDirection: 'row',  paddingTop: 30, paddingBottom: 30, '&:hover': {backgroundColor: '$beige'},}}>
        <Box css={{ flex: 'none', paddingRight: 0, width: '40%'}}>
            <Link href="/home"><NavElement css={{ fontWeight: 300, }}>{number}</NavElement></Link>
            <Link href="/home"><NavElement css={{ fontWeight: 600, }}>{title}</NavElement></Link>
        </Box>
        <Box css={{ }}>
        <NavElement css={{ fontWeight: 400, paddingLeft: 0,}}>{description}</NavElement>
        </Box>
    </Box>
    </>
  );
};

export default WorkColumn;
