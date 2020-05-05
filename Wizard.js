import React from 'react'
import { WizardContextProvider } from './WizardContextProvider'
import { useForm, FormContext } from 'react-hook-form'
import { StateMachineProvider, createStore, DevTool } from 'little-state-machine'

createStore({
    data: {}
})

export default function Wizard({ children, useFormArgs, initialPage, onSubmit, enableDevTool }) {
    const formContextMethods = useForm(useFormArgs)

    return (
        <StateMachineProvider>
            {enableDevTool && process.env.NODE_ENV !== 'production' && <DevTool />}
            <FormContext {...formContextMethods}>
                <WizardContextProvider
                    initialPage={initialPage}
                    onSubmit={onSubmit}
                >
                    {children}
                </WizardContextProvider>
            </FormContext>
        </StateMachineProvider>
    )
}