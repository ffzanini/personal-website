import { useState } from 'react'
import styled from 'styled-components'

import { Text } from '@src/components/Text'
import { Row } from '@src/components/Row'
import { Icon } from '@src/components'
import { useTranslation } from '@src/context'
import Link from 'next/link'

const Navbar = () => {
  const { location, setLocation, translations } = useTranslation()

  const [isOpen, setIsOpen] = useState(false)

  const listItemsHeight = isOpen ? '100%' : '0px'

  const textColor = 'black'

  const NavbarItemsProps = {
    mr: 24,
    color: [textColor],
    fontSize: [32, 32, '2.8rem'],
    fontFamily: ['Roboto']
  }

  return (
    <NavbarContainer bg={'transparent'}>
      <Row alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
        <NavbarItems height={[listItemsHeight, listItemsHeight, listItemsHeight]} flexDirection={['column', 'column', 'column']} justifyContent={'center'} alignItems={'center'}>
          <Link href='/' >
            <a onClick={() => setIsOpen(false)}>
              <Text {...NavbarItemsProps}>{translations.navbar.HomePage}</Text>
            </a>
          </Link>
          <Link href='/about' >
            <a onClick={() => setIsOpen(false)}>
              <Text {...NavbarItemsProps}>{translations.navbar.aboutPage}</Text>
            </a>
          </Link>
          <Link href='/portfolio' >
            <a onClick={() => setIsOpen(false)}>
              <Text {...NavbarItemsProps}>{translations.navbar.PortifolioPage}</Text>
            </a>
          </Link>
          <Link href='/clients' >
            <a onClick={() => setIsOpen(false)}>
              <Text {...NavbarItemsProps}>{translations.navbar.clientsPage}</Text>
            </a>
          </Link>
          <Link href='/blog' >
            <a onClick={() => setIsOpen(false)}>
              <Text {...NavbarItemsProps}>{translations.navbar.blogPage}</Text>
            </a>
          </Link>
          <a href='mailto:devffzanini@gmail.com' rel='noreferrer' onClick={() => setIsOpen(false)}>
            <Text {...NavbarItemsProps}>{translations.navbar.Contact}</Text>
          </a>
          {isOpen && (
            <Row onClick={() => setIsOpen(false)} cursor='pointer' position='absolute' top={0} right={0} mt={36} mr={40}>
              <Icon
                name='close'
                color={textColor}
              />
            </Row>
          )}
        </NavbarItems>
        <Row onClick={() => setIsOpen(true)} cursor='pointer' display={['block', 'block', 'block']}>
          <Icon
            name='menu'
            color={textColor}
          />
        </Row>
      </Row>
      <Row>
      <Row>
          <Text
            fontWeight={location === 'pt' ? 'bold' : 'normal'}
            onClick={() => setLocation('pt')}
            cursor='pointer'
            color={textColor}
            fontSize={'2.2rem'}
          >
            PT-BR
          </Text>
          <Text fontSize={'2.2rem'}> &nbsp; | &nbsp;</Text>
          <Text
            fontWeight={location === 'en' ? 'bold' : 'normal'}
            onClick={() => setLocation('en')}
            cursor='pointer'
            color={textColor}
            fontSize={'2.2rem'}
          >
            EN-US
          </Text>
        </Row>
      </Row>
    </NavbarContainer>
  )
}

const NavbarContainer = styled.nav<{ bg: string }>`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 3rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  background-color: ${({ bg }) => bg};
  transition: all 0.2s ease-in-out;
`

const NavbarItems = styled(Row)`
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  justify-content: center;
  align-items: center;
  p {
    margin-bottom: 1.5rem;
  }
  ${({ theme }) => `background-color: ${theme.colors.white};`}
`

export default Navbar
