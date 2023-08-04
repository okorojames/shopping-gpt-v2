import {useEffect} from "react"
import {useLocation} from "react-router-dom"

export const GetToTopOnRender = () => {
  const pathname = useLocation()
  useEffect(()=>{
    window.scrollTo({top:0, left:0, behavior: "smooth"})
  },[pathname]);

return null;
}
