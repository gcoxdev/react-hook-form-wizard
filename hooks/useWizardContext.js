import { useContext } from 'react'
import WizardContext from '../WizardContext'

export const useWizardContext = () => {
    return useContext(WizardContext)
}