import { FC } from 'react'
import { InternacionalizaionProvider } from './internacionalization-context'

const AppProvider: FC = ({ children }) => <InternacionalizaionProvider>{children}</InternacionalizaionProvider>

export default AppProvider
