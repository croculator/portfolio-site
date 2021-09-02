import * as React from "react";
import Link from 'next/link'
import { styled } from '@stitches/react';
import styles from './footer.module.css'

const Button = styled('button', {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: '13px',
    padding: '10px 15px',
    '&:hover': {
      backgroundColor: 'lightgray',
    },
  });

  const LineBreak = styled('linebreak', {
    width: '100%',
    height: '1px',
    display: 'block',
    backgroundColor: 'lightgray',
    marginLeft: '4',
    marginRight: '4',
  });


  const Column = styled('column', {
    float: '=left',
    width: '33.33%',
  });

  const NavLink = styled('li', {
    listStyle: "none",
    textDecoration: "none",
    color: "LightGray",
    margin: 10,
  });


const Footer = ()=> {
  return (
    <>
    <LineBreak></LineBreak>
    <div className={styles.row}>
        <div className={styles.column}>
            <ul>
                <li className={styles.navLinkItem} ><Link href ="/" className={styles.navLinkText}><a>Home</a></Link></li><br></br>
                <li className={styles.navLinkItem} ><Link href ="/about" className={styles.navLinkText}><a>About</a></Link></li><br></br>
                <li className={styles.navLinkItem} ><Link href ="/work" className={styles.navLinkText}><a>Work</a></Link></li><br></br>
            </ul>
        </div>
        <div className={styles.column}>
            <ul >
                <li className={styles.navLinkItem} ><a href ="https://github.com/mike0x10" className={styles.navLinkText}>Github</a></li><br></br>
                <li className={styles.navLinkItem} ><a href ="https://twitter.com/mike0x10" className={styles.navLinkText}>Twitter</a></li><br></br>
                <li className={styles.navLinkItem} ><Link href ="/about" className={styles.navLinkText}><a>The PMF</a></Link></li><br></br>
            </ul>
        </div>
        <Button>test</Button>
    </div>
    </>
  );
};

export default Footer;