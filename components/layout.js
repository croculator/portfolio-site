import Box from "../components/box";
import Footer from "../components/footer";
import Nav from "../components/nav"

const Layout = ({ pageTitle, children }) => {
  return (
    <>
        <Box css= {{
            boxSizing: 'border-box',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 650,
            margin: 'auto',
            // /backgroundColor: '#ECEAE3'
            
        }}>
            <title>{ pageTitle }</title>

            {children}
           
            <Footer/>
        </Box>  
        <Nav/>
    </>
  );
};

export default Layout;
