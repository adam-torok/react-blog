import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
    const { pathname } = useLocation()
    const [scrolledToTop, setScrolledToTop] = useState(true)

    useEffect(() => {
        scrollToTop()
    }, [pathname])

    const scrollToTop = () => {
        window.scrollTo(0, 0)
        setScrolledToTop(true)
    }

    window.addEventListener('scroll', function () {
            this.window.scrollY == 0 ? setScrolledToTop(false) : setScrolledToTop(true)
    })

    return (
        <>
            {scrolledToTop && (
                <div onClick={scrollToTop} className="scroller">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                </div>)}
        </>
    )
}