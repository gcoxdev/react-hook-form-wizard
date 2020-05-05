import React, { useEffect } from 'react'

export const usePageTotal = (children, updatePageTotal) => {
    useEffect(() => {
        const pagesComponent = React.Children.toArray(children).filter((child, index) => {
            return child.type.name === 'Pages'
        })[0]
        if (pagesComponent !== undefined) {
            const pageComponents = React.Children.toArray(pagesComponent.props.children)
            updatePageTotal(pageComponents.length)
        }
    }, [children, updatePageTotal])
}