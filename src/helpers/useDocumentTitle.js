import { useRef, useEffect } from "react";

export default function useDocumentTitle(title, prevailOnUnmount = false) {
    const currentTitle = useRef(document.title)

    useEffect(() => {
        document.title = title
    }, [title])

    useEffect(() => () => {
        if (!prevailOnUnmount) {
            document.title = currentTitle.current
        }
    }, [])
}