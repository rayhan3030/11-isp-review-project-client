import { useEffect } from "react"


// This component is for Showing title dynamically all over the website

const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title}- ISP Review`;
    }, [title])
};

export default useSetTitle;