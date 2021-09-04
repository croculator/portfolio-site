import Box from "../components/box";
import Footer from "../components/footer";
import Nav from "../components/nav"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
    {/* <Box css={{ backgroundColor: 'hsla(47, 19%, 91%, 0.95)', }}> */}

        <Box css= {{
            boxSizing: 'border-box',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 650,
            padding: 20,
            margin: 'auto',
            }}>

            <title>{ pageTitle }</title>

           <Box css={{marginTop: 80}}>
            {children}
            </Box> 
            <Footer/>
        </Box>  
        <Nav/>
        {/* </Box> */}
    </>
  );
};

export default Layout;
