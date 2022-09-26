import { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useRedirectFromRoot() {
    const defaultPath = '/posts'
    const navigate = useNavigate()
    const location = useLocation()
    
    useEffect(() => {
        if(location.pathname === '/') navigate(defaultPath)
    }, [location.pathname, navigate])
}

const RedirectFromRoot: FC = () => {
    useRedirectFromRoot()
    return null
}

export default RedirectFromRoot