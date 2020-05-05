import { useState } from 'react'

export const useWizard = ({ initialPage = 0 }) => {
    const [activePage, setActivePage] = useState(initialPage)
    const [pageTotal, setPageTotal] = useState(0)
    const previousPage = () => setActivePage(activePage - 1)
    const nextPage = () => setActivePage(activePage + 1)
    const goToPage = (pageIndex) => setActivePage(pageIndex)
    const updatePageTotal = (total) => setPageTotal(total)
    const isLastPage = activePage === pageTotal - 1

    return { activePage, pageTotal, previousPage, nextPage, goToPage, updatePageTotal, isLastPage }
}