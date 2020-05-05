import React from 'react'
import { useWizardContext } from '../hooks/useWizardContext'

export default function Progress() {
    const { activePage, pageTotal } = useWizardContext()
    return (
        <progress className="progress" value={(Math.ceil(((activePage + 1) / pageTotal) * 100)).toString()} max="100"></progress>
    )
}