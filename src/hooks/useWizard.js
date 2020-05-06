import { useState } from 'react'

export const useWizard = ({ initialPage }) => {
    const [activePage, setActivePage] = useState(initialPage)
    const [pageTotal, setPageTotal] = useState(1)
    const previousPage = () => setActivePage(activePage - 1)
    const nextPage = () => setActivePage(activePage + 1)
    const goToPage = (pageIndex) => setActivePage(pageIndex)
    const isLastPage = activePage === pageTotal - 1

    return {
        activePage,
        pageTotal,
        previousPage,
        nextPage,
        goToPage,
        isLastPage,
        setPageTotal
    }
}
