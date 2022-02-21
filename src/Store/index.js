import { createContext, useContext } from "react"
import GridViewStore from "./GridViewStore"

const AppContext = createContext({
    GRID: new GridViewStore(),
})

const useStore = () => useContext(AppContext)

export default useStore
