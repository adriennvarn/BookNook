import { useEffect, useState } from "react"

export function useLocalStorage(key, initialValue = null) {
    const [data, setData] = useState(localStorage.getItem(key) ? localStorage.getItem(key) : initialValue)
    useEffect(() => {
        localStorage.setItem(key, data)
    }, [key, data])

    return [data, setData]
}