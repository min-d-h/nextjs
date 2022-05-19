import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import Link from 'next/link'

import Footer from './footer';

const Dashboard = ({children}) => (
  <>
    <Head>
      <title>
        Dashboard | Material Kit
      </title>
    </Head>
    <Container>
      <div className="header">
        여기는 헤더 가 들어 갑 니다
      </div>
      <Link href="/about">
          <a><h2>about 으로 들어갑니다.</h2></a>
      </Link>
      <Link href="/join">
        <a><h3>글쓰기</h3></a>
      </Link>
      <Link href="/">
        <a><h3>Main</h3></a>
      </Link>

        {children}
        <Footer children={undefined} />
    </Container>
  </>
);

export default Dashboard;