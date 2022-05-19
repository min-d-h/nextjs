import styled from 'styled-components'
import Link from 'next/link'
import { Container } from '@mui/material'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Container>
      <Title>My page</Title>
      <Link href="/about">
        <a><h2>about 으로 들어갑니다.</h2></a>
      </Link>
    </Container>
  )
}
