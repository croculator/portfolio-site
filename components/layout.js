import * as React from "react";
import Link from 'next/link'
import { container, heading, navLinks, navLinkItem, navLinkText} from './layout.module.css'
import { styled } from '@stitches/react';
import  Button  from './buttonTest'
import Footer from '../components/footer'

console.log('container: ', container)

const Layout = ({ pageTitle, children }) => {
    return (
        <main className={container}>
          <title>{pageTitle} </title>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}><Link href ="/" className={navLinkText} ><a>Home</a></Link></li>
              <li className={navLinkItem}><Link href ="/about" className={navLinkText} ><a>About</a></Link></li>
              <Button>hello</Button>
            </ul>
          </nav>
          <h1 className={heading}>Title</h1>
          {children}
          <Footer></Footer>
        </main>
    );
};

export default Layout;