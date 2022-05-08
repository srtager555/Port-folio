import { useEffect } from "react"

export function useInPath(state) {
    useEffect(() => {
        state(window.location.pathname)
    }, [])
}