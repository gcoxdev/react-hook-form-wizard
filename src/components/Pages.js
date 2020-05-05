import { useWizardContext } from '../hooks/useWizardContext'

export default function Pages({ children }) {
    const { activePage, pageTotal } = useWizardContext()
    if (pageTotal > 1) {
        return children[activePage]
    } else {
        return children
    }
}