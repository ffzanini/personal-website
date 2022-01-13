import React, { useMemo } from 'react'

import { theme } from '@src/theme/theme'
import getDeepKey from '@src/utils/getDeepKey'

import { IconProps } from './IconTypes'

import Menu from './MenuIcons/Menu'
import Close from './MenuIcons/Close'
import Heart from './MenuIcons/Heart'
import Linkedin from './MediaIcons/Linkedin'
import Youtube from './MediaIcons/Youtube'
import Instagram from './MediaIcons/Instagram'
import Medium from './MediaIcons/Medium'
import Github from './MediaIcons/Github'
import Twitter from './MediaIcons/Twitter'
import Stackoverflow from './MediaIcons/Stackoverflow'
import Mail from './MediaIcons/Mail'
import Twitch from './MediaIcons/Twitch'

const IconComponent = ({ name, color, size, width, height, ...props }: IconProps) => {
  const Icon = useMemo(() => {
    switch (name) {
      case 'menu':
        return Menu
      case 'close':
        return Close
        case 'heart':
          return Heart
      case 'linkedin':
        return Linkedin
      case 'youtube':
        return Youtube
      case 'instagram':
        return Instagram
      case 'medium':
        return Medium
      case 'github':
        return Github
      case 'twitter':
        return Twitter
      case 'stackoverflow':
        return Stackoverflow
      case 'mail':
        return Mail
      case 'twitch':
        return Twitch
    }
  }, [name])

  const iconColor = getDeepKey(theme.colors, color)

  return (
    <Icon color={iconColor} size={size} />
  )
}

export default IconComponent
