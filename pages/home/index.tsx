import { Container, Icon, Navbar, Row, Text } from '@src/components'
import { Footer } from '@src/components/Footer'

import { useTranslation } from '@src/context'

import styled from 'styled-components'

const Home = () => {
  const { translations } = useTranslation()

  return (
    <>
    <Navbar/>
    <Container flexDirection='column' alignContent='center' alignItems='center' justifyContent='center' height={'100vh'} maxWidth={'100rem'} margin={'0 auto'}>
      <Image src='https://avatars.githubusercontent.com/u/20977822'></Image>
      <Text fontSize={['2.5rem', '5rem']} letterSpacing='0.1rem' fontFamily={'PlayfairDisplay'} textAlign='center' fontWeight={900}>
        {translations.home.name}
      </Text>
      <Text fontSize={['1.5rem', '2rem']} letterSpacing='0.1rem' textAlign='center' fontWeight={500} mt={['0.4rem', '0.5rem']} >
        {translations.home.role}<a target='_blank' href={translations.home.link}>{translations.home.company}</a>
      </Text>
      <Text fontSize={['1.8rem', '2rem']} textAlign='center' fontWeight={300} mt={['1.5rem', '2rem']} lineHeight='1.6' marginX={3}>
        {translations.home.description}
      </Text>
      <Text fontSize={['2rem', '2rem']} textAlign='center' fontWeight={500} mt={['3rem', '6rem']}>
        {translations.home.social}
      </Text>
      <Row alignItems='center' justifyContent='center' width={'100%'} mt={['1rem', '1rem']}>
        <a href='https://github.com/ffzanini' target='_blank' rel='noreferrer'>
          <Row mr={['1rem', '1rem']}><Icon size='2.4rem' name='github'/></Row>
        </a>

        <a href='https://www.twitter.com/ffzanini/' target='_blank' rel='noreferrer'>
          <Row mr={['1rem', '1rem']}><Icon size='2.4rem' name='twitter'/></Row>
        </a>

        <a href='https://www.instagram.com/ffzanini/' target='_blank' rel='noreferrer'>
          <Row mr={['1rem', '1rem']}><Icon size='2.4rem' name='instagram'/></Row>
        </a>

        <a href='https://www.youtube.com/channel/UCVHgTgRK0M5kt2Gvi60b7Eg' target='_blank' rel='noreferrer'>
          <Row mr={['1rem', '1rem']}><Icon size='2.4rem' name='youtube'/></Row>
        </a>

        <a href='https://www.linkedin.com/in/ffzanini/' target='_blank' rel='noreferrer'>
          <Row mr={['1rem', '1rem']}><Icon size='2.4rem' name='linkedin'/></Row>
        </a>

        <a href='https://www.twitch.tv/takenon' target='_blank' rel='noreferrer'>
          <Row mr={['1rem', '1rem']}><Icon size='2.4rem' name='twitch'/></Row>
        </a>

        <a href='https://stackoverflow.com/users/13290905/felipe-frantz-zanini' target='_blank' rel='noreferrer'>
          <Row mr={['1rem', '1rem']}><Icon size='2.4rem' name='stackoverflow'/></Row>
        </a>

        <a href='https://medium.com/@ffzanini' target='_blank' rel='noreferrer'>
          <Row mr={['1rem', '1rem']}><Icon size='2.4rem' name='medium'/></Row>
        </a>

        <a href='mailto:devffzanini@gmail.com' rel='noreferrer'>
          <Row mr={['1rem', '1rem']}><Icon size='2.4rem' name='mail'/></Row>
        </a>
      </Row>
      <Footer/>
    </Container>
    </>
  )
}

const Image = styled.img`
  width: 20rem;
  margin-bottom: 2.5rem;
  border-radius: 20rem;
  @media (max-width: 768px) {
    width: 16rem;
  }
`
export default Home
