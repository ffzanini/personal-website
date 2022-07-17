import { Column, Container, Icon, ProgressBar, Row, Text } from '@src/components'
import { useTranslation } from '@src/context'
import styled from 'styled-components'

const AboutMe = () => {
  const { translations } = useTranslation()

  return (
    <Container flexDirection={'column'} maxWidth={['100%']} padding={'3rem'}>
      <Row justifyContent={'space-between'}>
        <Column>
        <Text fontSize={['6rem']} fontFamily={'CrimsonText'} fontWeight={700} lineHeight={'1.2'}>{translations.about.title}</Text>
        <Text fontSize={['2.5rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'}>{translations.about.sub_title}</Text>
        </Column>
      </Row>
      <Row flexDirection={['column-reverse','row']} alignItems={['center','flex-start']} marginTop={['0','5rem']} padding={['0', '0 6rem']}>
        <Column marginRight={['0','5rem']}>
          <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
          {translations.about.description_text.text_one_one} <Links target='_blank' href={translations.about.description_text.text_one_href}>{translations.about.description_text.text_one_link}</Links> {translations.about.description_text.text_one_two}
          </Text>
          <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
          {translations.about.description_text.text_two_one}
          </Text>
          <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
          {translations.about.description_text.text_three_one}
          </Text>
          <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
          {translations.about.description_text.text_four_one}
          </Text>
        </Column>
        <Column marginLeft={['0','5rem']} marginBottom={['1rem','0']} marginTop={['1rem','0']}>
        <Image src='https://avatars.githubusercontent.com/u/20977822'/>
        </Column>
      </Row>
      <Row flexDirection={['column','row']} justifyContent={'space-between'} marginTop={['0','5rem']} padding={['0','0 6rem']}>
        <Column marginRight={['0','5rem']} minWidth={['0','30%']}>
          <Text fontSize={['4rem']} fontFamily={'CrimsonText'} fontWeight={700} lineHeight={'1.8'} textAlign={'justify'}>
          {translations.about.carrer.title}
          </Text>
          <Column marginTop={['0','2rem']}>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={700} lineHeight={'2.0'} textAlign={'justify'}>
            {translations.about.carrer.four.title}
            </Text>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'} textAlign={'justify'}>
            {translations.about.carrer.four.description_two}
            </Text>
            <Text fontSize={['1.6rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
            {translations.about.carrer.four.date_two}
            </Text>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'} textAlign={'justify'}>
            {translations.about.carrer.four.description_one}
            </Text>
            <Text fontSize={['1.6rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
            {translations.about.carrer.four.date_one}
            </Text>
          </Column>
          <Column marginTop={'2rem'}>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={700} lineHeight={'2.0'} textAlign={'justify'}>
            {translations.about.carrer.three.title}
            </Text>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'} textAlign={'justify'}>
            {translations.about.carrer.three.description}
            </Text>
            <Text fontSize={['1.6rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
            {translations.about.carrer.three.date}
            </Text>
          </Column>
          <Column marginTop={'2rem'}>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={700} lineHeight={'2.0'} textAlign={'justify'}>
            {translations.about.carrer.two.title}
            </Text>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'} textAlign={'justify'}>
            {translations.about.carrer.two.description}
            </Text>
            <Text fontSize={['1.6rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
            {translations.about.carrer.two.date}
            </Text>
          </Column>
          <Column marginTop={'2rem'}>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={700} lineHeight={'2.0'} textAlign={'justify'}>
            {translations.about.carrer.one.title}
            </Text>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'} textAlign={'justify'}>
            {translations.about.carrer.one.description}
            </Text>
            <Text fontSize={['1.6rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
            {translations.about.carrer.one.date}
            </Text>
          </Column>
        </Column>
        <Column marginLeft={['0','5rem']} marginRight={['0','5rem']} minWidth={['0','30%']}>
          <Text fontSize={['4rem']} fontFamily={'CrimsonText'} fontWeight={700} lineHeight={'1.8'} textAlign={'justify'}>
          {translations.about.education.title}
          </Text>
          <Column marginTop={['0','2rem']}>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={700} lineHeight={'2.0'} textAlign={'justify'}>
            {translations.about.education.four.title}
            </Text>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'} textAlign={'justify'}>
            {translations.about.education.four.description}
            </Text>
            <Text fontSize={['1.6rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
            {translations.about.education.four.date}
            </Text>
          </Column>
          <Column marginTop={'2rem'}>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={700} lineHeight={'2.0'} textAlign={'justify'}>
            {translations.about.education.three.title}
            </Text>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'} textAlign={'justify'}>
            {translations.about.education.three.description}
            </Text>
            <Text fontSize={['1.6rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
            {translations.about.education.three.date}
            </Text>
          </Column>
          <Column marginTop={'2rem'}>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={700} lineHeight={'2.0'} textAlign={'justify'}>
            {translations.about.education.two.title}
            </Text>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'} textAlign={'justify'}>
            {translations.about.education.two.description}
            </Text>
            <Text fontSize={['1.6rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
            {translations.about.education.two.date}
            </Text>
          </Column>
          <Column marginTop={'2rem'}>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={700} lineHeight={'2.0'} textAlign={'justify'}>
            {translations.about.education.one.title}
            </Text>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'} textAlign={'justify'}>
            {translations.about.education.one.description}
            </Text>
            <Text fontSize={['1.6rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
            {translations.about.education.one.date}
            </Text>
          </Column>
        </Column>
        <Column marginLeft={['0','5rem']} minWidth={['0','30%']}>
          <Text fontSize={['4rem']} fontFamily={'CrimsonText'} fontWeight={700} lineHeight={'1.8'} textAlign={'justify'}>
          {translations.about.courses.title}
          </Text>
          <Column marginTop={['0','2rem']}>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={700} lineHeight={'2.0'} textAlign={'justify'}>
            {translations.about.courses.two.title}
            </Text>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'} textAlign={'justify'}>
            {translations.about.courses.two.description}
            </Text>
            <Text fontSize={['1.6rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
            {translations.about.courses.two.date}
            </Text>
          </Column>
          <Column marginTop={'2rem'}>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={700} lineHeight={'2.0'} textAlign={'justify'}>
            {translations.about.courses.one.title}
            </Text>
            <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={400} lineHeight={'1.2'} textAlign={'justify'}>
            {translations.about.courses.one.description}
            </Text>
            <Text fontSize={['1.6rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} textAlign={'justify'}>
            {translations.about.courses.one.date}
            </Text>
          </Column>
        </Column>
      </Row>
      <Column alignItems={'center'} padding={['0','0 5.5rem']} marginTop={['3rem','8rem']}>
        <Text fontSize={['4rem']} fontFamily={'CrimsonText'} fontWeight={700} lineHeight={'1.2'}>
        {translations.about.tech}
        </Text>
        <Row flexDirection={['column','row']} width={'100%'} marginTop={['3rem','5rem']}>
          <ProgressBar progress={90} label={'HTML'} />
          <ProgressBar progress={85} label={'CSS'}/>
          <ProgressBar progress={85} label={'JavaScript'}/>
          <ProgressBar progress={65} label={'TypeScript'}/>
        </Row>
        <Row flexDirection={['column','row']} width={'100%'} marginTop={'2rem'}>
          <ProgressBar progress={85} label={'React'}/>
          <ProgressBar progress={70} label={'Vue'}/>
          <ProgressBar progress={60} label={'Angular'}/>
        </Row>
      </Column>
      <Row justifyContent={'center'} marginTop={['3rem','8rem']}>
        <Column alignItems={'center'} marginLeft={['0','5rem']} minWidth={['0','30%']}>
          <Text fontSize={['4rem','5rem']} fontFamily={'CrimsonText'} fontWeight={700} lineHeight={'1.2'} >
            {translations.about.contact_email}
          </Text>
          <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} >
            {translations.about.contact_one}
          </Text>
          <Text fontSize={['2rem']} fontFamily={'Roboto'} fontWeight={300} lineHeight={'1.8'} >
            {translations.about.contact_two}
          </Text>
          <Row mt={['1rem', '2rem']}>
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
        </Column>
      </Row>
    </Container>
  )
}

const Image = styled.img`
  width: 50rem;
  border-radius: 0.5rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Links = styled.a`
  font-weight: 500;
  :hover {
    color: purple;
    opacity: 0.6;
    transition: 0.3s;
  }
`

export default AboutMe
