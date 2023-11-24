import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { MenuOutlined } from "@mui/icons-material"

import Link from "next/link";


function NavBar() {
  return (
    <AppBar position='sticky' elevation={0} className="gab-2">
        <Toolbar className="gap-7">
        <IconButton
            size="large"
            edge="start"
            
        >
            <MenuOutlined />

        </IconButton>

        <Link href='/' >
            <Typography variant="h6" color='white'> Cookie Master </Typography>
        </Link> 
        <div style={{flex: 1}}/>


        <Link href='/themechangerpage' >
            <Typography variant="h6" color='white'> Cambiar tema </Typography>
        </Link>  

         </Toolbar>



 
    </AppBar>
  )
}

export default NavBar
