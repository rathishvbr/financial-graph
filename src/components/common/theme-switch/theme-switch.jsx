import { useAppDispatch, useAppSelector } from "../../../DAL/hooks"
import { setTheme } from "../../../DAL/user/user-slice"
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { IconButton } from "@mui/material"

function ThemeSwitch() {
    const dispatch = useAppDispatch()
    const isDarkMode = useAppSelector(state => state.user.theme === 'dark')

    const toggleTheme = () => {
        dispatch(setTheme(isDarkMode ? 'light' : 'dark'))
    }

    return (
        <div className='flex justify-center items-center h-screen'>
          <IconButton aria-label="Toggle Theme" onClick={toggleTheme}>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </div>
    )
}

export default ThemeSwitch