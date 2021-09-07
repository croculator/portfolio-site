import Box from "../components/box";
import { TwitterLogoIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import Link from "next/link";
import { ReaderIcon } from "@modulz/radix-icons";
import { styled } from '../stitches.config.ts';
import { ArrowTopRightIcon,  } from "@modulz/radix-icons";




const PersonalLinks = ({ }) => {
    return (

    <Box as='div' css={{ boxSizing: 'borderBox', border: '1px solid  ', borderRadius: 10, borderColor: '$gra200', width: '100%', fontFamily: '$inconsolata'}}>

        {/* Twitter */}
        <Box as='a' href='https://twitter.com/mike0x10' 
        css={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid',  borderWidth: 'thin', borderColor: '$gray300', padding: 15,
        '&:hover': {
            backgroundColor: '$gray900',
            color: '$black',
            borderRadius: 10,
        },
        }}>
            <Box css={{ fontWeight: 600, fontSize: '$3', color: '$gray200'}}>
            Twitter <ArrowTopRightIcon/>
            </Box>

            <Box css={{ fontWeight: 600, fontSize: '$3',  color: '$gray200' }}>
            @mike0x10
            </Box>
        </Box>



        {/* Youtube */}
        <Box as='a' href='https://twitter.com/mike0x10' 
        css={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid',  borderWidth: 'thin', borderColor: '$gray200', padding: 15,
        '&:hover': {
            backgroundColor: '$gray900',
            color: '$black',
            borderRadius: 10,
        },
        }}>
            <Box css={{ fontWeight: 600, fontSize: '$3', color: '$gray200'}}>
            Youtube <ArrowTopRightIcon/>
            </Box>

            <Box css={{ fontWeight: 600, fontSize: '$3',  color: '$gray200' }}>
            The Product Market Fit
            </Box>
        </Box>


        {/* ETH address */}
        <Box as='a' href='https://etherscan.io/address/0xe556D8349586ad9E9b83723dd9acc2319537A9Fa' 
        css={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid',  borderWidth: 'thin', borderColor: '$gray200', padding: 15,
        '&:hover': {
            backgroundColor: '$gray900',
            color: '$black',
            borderRadius: 10,
        },
        }}>
            <Box css={{ fontWeight: 600, fontSize: '$3', color: '$gray200'}}>
            ETHEREUM ADDRESS <ArrowTopRightIcon/>
            </Box>

            <Box css={{ fontWeight: 600, fontSize: '$3',  color: '$gray200' }}>
            0xe556D8...537A9Fa 
            </Box>
        </Box>

    </Box>


    );
};

export default PersonalLinks;
