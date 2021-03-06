import { Column, Container, Row, Text } from '@src/components'

import Link from 'next/link';

const Blog = () => {
return(
  <Container flexDirection='column' alignContent='center' alignItems='center' justifyContent='center' height={'100vh'} maxWidth={'100rem'} margin={'0 auto'}>
  <Row>
    <Link href="/">Back</Link>
  </Row>
  <Column>
    <Text
      color='black'
      fontFamily='Roboto'
      textAlign='center'
      fontSize={['1.6rem', '1.6rem']}
      lineHeight='1.2'
      fontWeight={500}
      maxWidth={['none', '100%']}
      mt={25}
    >
      Articles - In Construction
    </Text>
  </Column>
</Container>
)
}

export default Blog
