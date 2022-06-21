import { Container, Text, Icon } from '@src/components'

import { useTranslation } from '@src/context'
import { Row } from '../Row'

const Footer = () => {
  const { translations } = useTranslation()
  const yearNow = (new Date().getFullYear())

  return (
    <Container backgroundColor='white' flexDirection='column' alignItems='center' justifyContent='center' width={'100%'} mt={['3rem', '3rem']}>
      <Row>
      <Text
        color='black'
        fontFamily='Roboto'
        textAlign='center'
        fontSize={['2rem', '2rem']}
        fontWeight={300}
        maxWidth={['none', '100%']}
      >
        {translations.footer.made} <Icon name='heart'/> {translations.footer.by}. <b>{translations.footer.reserved}</b>
      </Text>
      </Row>
    </Container>
  )
}

export default Footer
