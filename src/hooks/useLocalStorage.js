import { useEffect, useState } from "react"

export function useLocalStorage(key, initialValue = null) {
    const [data, setData] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue)
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [key, data])

    return [data, setData]
}