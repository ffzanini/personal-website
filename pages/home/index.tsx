import { Container, Icon, Navbar, Row, Text } from '@src/components'
import { Footer } from '@src/components/Footer'
import { useTranslation } from '@src/context'

import Link from 'next/link'

import styled from 'styled-components'

const Home = () => {
  const { translations } = useTranslation()

  return (
    <>
    <Navbar/>
    <Container flexDirection='column' alignContent='center' alignItems='center' justifyContent='center' height={'100vh'} maxWidth={'100rem'} margin={'0 auto'}>
      <Image src='https://avatars.githubusercontent.com/u/20977822'></Image>
      <Text fontSize={['3rem', '4.5rem']} fontFamily={'CrimsonText'} fontWeight={700} lineHeight='1.2'>
        {translations.home.name}
      </Text>
      <Text fontSize={['2rem', '2rem']} fontWeight={400} mt={['1rem', '1rem']} lineHeight='1.2'>
        {translations.home.role} <LinkToCompany target='_blank' href={translations.home.link}>{translations.home.company}</LinkToCompany>
      </Text>
      <Text fontSize={['1.8rem', '2rem']} textAlign='center' fontWeight={300} mt={['1.5rem', '2rem']} lineHeight='1.6' >
        {translations.home.description} <Link href='/about'><LinkToAbout> {translations.home.description_link}</LinkToAbout></Link>.
      </Text>
      <Text fontSize={['1.8rem', '1.8rem']} fontWeight={400} mt={['3rem', '4rem']}>
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

const LinkToCompany = styled.a`
  font-weight: 500;
  :hover {
    color: purple;
    opacity: 0.6;
    transition: 0.3s;
  }
`

const LinkToAbout = styled.span`
  cursor:pointer;
  font-weight: 500;
  :hover {
    color: purple;
    opacity: 0.6;
    transition: 0.3s;
  }
`
export default Home
