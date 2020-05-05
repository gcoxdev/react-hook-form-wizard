import React from 'react'
import { useWizardContext } from './hooks/useWizardContext'

export default function Navigation(props) {
    const { activePage, previousPage, pageTotal } = useWizardContext()
    return (
        <div>
            {activePage > 0 && <button onClick={previousPage}>Previous</button>}
            <button type="submit">
                {activePage === pageTotal - 1 ? 'Submit' : 'Next'}
            </button>
        </div>
    )
}