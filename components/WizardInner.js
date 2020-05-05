import React, { useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useDataContext } from './hooks/useDataContext'
import { useWizardContext } from './hooks/useWizardContext'
import { usePageTotal } from './hooks/usePageTotal'

export default function WizardInner({ children, onSubmit }) {

    const [submitted, setSubmitted] = useState(false)
    const dataContext = useDataContext()
    const { action } = dataContext
    const formContext = useFormContext()
    const { handleSubmit } = formContext
    const wizardContext = useWizardContext()

    usePageTotal(children, wizardContext.setPageTotal)

    useEffect(() => {
        if (submitted) {
            onSubmit({ dataContext, formContext, wizardContext })
            setSubmitted(false)
            if (!wizardContext.isLastPage) wizardContext.nextPage()
        }
    }, [onSubmit, dataContext, submitted, formContext, wizardContext])

    return (
        <form onSubmit={handleSubmit((pageData) => {
            action(pageData)
            setSubmitted(true)
        })}>
            {children}
        </form>
    )
}
