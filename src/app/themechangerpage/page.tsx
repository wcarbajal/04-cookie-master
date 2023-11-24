'use client'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { ChangeEvent, useState } from 'react'

function ThemeChargerPage() {
  
  const [currentTheme, setCurrentTheme] = useState("ligth");

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    
    const selectedTheme = event.target.value;

    console.log("El tema seleccionado es: ", selectedTheme )

        setCurrentTheme (event.target.value);
        localStorage.setItem('theme', selectedTheme);
        
  }

    return (
    <Card >
        <CardContent >
            <FormControl> 
                <FormLabel>Tema</FormLabel>
                <RadioGroup 
                
                    value={ currentTheme }
                    onChange={onThemeChange}
                >
                    <FormControlLabel value='light' control={ <Radio />} label="Light"/>
                    <FormControlLabel value='dark' control={ <Radio />} label="Dark"/>
                    <FormControlLabel value='custom' control={ <Radio />} label="Custom"/>
                </RadioGroup>
            </FormControl>
        </CardContent>
    </Card>
  )
}

export default ThemeChargerPage
