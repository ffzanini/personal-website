import { createContext, useContext, useState } from 'react'

import { en, pt } from '../locales'

type Locations = 'pt' | 'en'

export interface InternacionalizationInterface {
  location: Locations
  setLocation: (location: Locations) => void
  translations: typeof pt
}

const InternacionalizationContext = createContext({} as InternacionalizationInterface)

const useTranslation = () => {
  const context = useContext(InternacionalizationContext)

  if (context === undefined) {
    throw new Error('useTranslation must be used within IternacionalizationProvider')
  }

  return context
}

const InternacionalizaionProvider = ({ children }) => {
  const [location, setLocation] = useState<Locations>('pt')

  const getTranslations = () => {
    if (location === 'en') return en
    return pt
  }

  return (
    <InternacionalizationContext.Provider value={{ location, setLocation, translations: getTranslations() }}>
      {children}
    </InternacionalizationContext.Provider>
  )
}

export { InternacionalizaionProvider, useTranslation }
