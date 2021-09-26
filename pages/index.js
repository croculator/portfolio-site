import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout";
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import Box from "../components/box";
import PersonalLinks from '../components/personalLinks';

import { styled } from '../stitches.config.ts';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 96,
  height: 96,
  borderRadius: '100%',
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '$highlighter',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});



// Exports
export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;



export default function Home() {
  return (
    <>
    <Layout>

      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Michael Diaz"
        />
        <AvatarFallback delayMs={600}>MD</AvatarFallback>
      </Avatar>

      <Box css={{ fontSize: '$9', fontFamily: '$inconsolata'}}>
        Michael Diaz
      </Box>

      <Box as='p'>
        Hi! Michael Diaz here, im a product designer, programmer, & visual artist. 
        Lets build something delightful together! Check out these links below, and 
        you are more of a video person, check out the youtube.
      </Box>

      <PersonalLinks css={{ margin: 30}}/>




    </Layout>
    </>
  )
}
