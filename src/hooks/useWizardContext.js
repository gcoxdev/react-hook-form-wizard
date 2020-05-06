import { useContext } from 'react'
import WizardContext from '../context/WizardContext'

export const useWizardContext = () => {
    return useContext(WizardContext)
}
