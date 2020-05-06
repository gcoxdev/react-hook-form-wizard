import { useWizardContext } from '../hooks/useWizardContext'

export default function Pages({ children }) {
    const { activePage } = useWizardContext()
    if (Array.isArray(children)) {
        return children[activePage]
    } else {
        return children
    }
}
