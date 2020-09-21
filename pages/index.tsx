import Link from "next/link";
import { Box } from "rebass/styled-components";

const IndexPage = () => (
  <>
    <h1>Hello First Page (CSS-in-JS)</h1>
    <Box>
      <Link href="/second">
        <a>Go Second Page</a>
      </Link>
    </Box>
  </>
);

export default IndexPage;
