import React from 'react'
import WizardContext from './WizardContext'
import { useWizard } from './hooks/useWizard'
import WizardInner from './WizardInner'

export const WizardContextProvider = ({ children, initialPage, onSubmit }) => {
    const wizard = useWizard({ initialPage })
    return (
        <WizardContext.Provider value={wizard}>
            <WizardInner onSubmit={onSubmit}>
                {children}
            </WizardInner>
        </WizardContext.Provider>
    )
}