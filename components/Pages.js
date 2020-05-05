import { useWizardContext } from '../hooks/useWizardContext'

export default function Pages({ children }) {
    const { activePage } = useWizardContext()
    return children[activePage]
}