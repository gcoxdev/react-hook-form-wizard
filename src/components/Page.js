import { useFormContext } from 'react-hook-form'
import { useDataContext } from '../hooks/useDataContext'
import { useWizardContext } from '../hooks/useWizardContext'

export default function Page({ children }) {
    const dataContext = useDataContext()
    const formContext = useFormContext()
    const wizardContext = useWizardContext()

    if (typeof children === 'function') {
        return children({ dataContext, formContext, wizardContext })
    }
    return children
}
