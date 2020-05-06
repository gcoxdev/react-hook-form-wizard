import React from 'react'
import PropTypes from 'prop-types'
import { WizardContextProvider } from '../context/WizardContextProvider'
import { useForm, FormContext } from 'react-hook-form'
import {
    StateMachineProvider,
    createStore,
    DevTool
} from 'little-state-machine'

createStore({
    data: {}
})

function Wizard({
    children,
    useFormArgs,
    initialPage = 0,
    onSubmit,
    enableDevTool
}) {
    const formContextMethods = useForm(useFormArgs)

    return (
        <StateMachineProvider>
            {enableDevTool && process.env.NODE_ENV !== 'production' && (
                <DevTool />
            )}
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

Wizard.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Wizard
