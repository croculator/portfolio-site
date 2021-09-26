import Box from "../components/box";
import Link from "next/link";
import { styled } from '../stitches.config.ts';

const Line = styled('line', {

    border: 'none',
    height: '1px',
    backgroundColor: '$gray100',
    color: 'black',
});



const LineBreak = ({ }) => {
  return (
    <>
        <Line as="hr"></Line>
    </>
  );
};

export default LineBreak;
