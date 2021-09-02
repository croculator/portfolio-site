import * as React from "react";
import { styled, global } from "../stitches.config";
import Layout from "../components/layout";

const globalStyles = global({
  body: {
    margin: 0
  }
});

const Box = styled("div", {});

const Text = styled("p", {
  fontFamily: "$system"
});

const Link = styled("a", {
  fontFamily: "$system",
  textDecoration: "none",
  color: "$purple600"
});

const Container = styled("div", {
  marginX: "auto",
  paddingX: "$3",

  variants: {
    size: {
      1: {
        maxWidth: "300px"
      },
      2: {
        maxWidth: "585px"
      },
      3: {
        maxWidth: "865px"
      }
    }
  }
});

export default function App() {
  globalStyles();
  return (
    <Layout>
      <Box css={{ paddingY: "$3" }}>
        <Container size={{ "@initial": "1", "@bp1": "2" }}>
          <Text as="h1">Hello, from Stitches.</Text>
          <Text>
            For full documentation, visit{" "}
            <Link href="https://stitches.dev">stitches.dev</Link>
          </Text>
        </Container>
      </Box>
    </Layout>

  );
}