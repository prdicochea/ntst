import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Cards() {
  return (
    <div>
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap','& > :not(style)': {
                m: 1,
                width: '45vw',
                height: 'auto',
                padding: 'auto',
                margin: 'auto',
                backgroundColor: '#0053E3',
                textAlign: 'center',
                color: '#FBF1E1',
                },
            }}
        >
            
        <Paper elevation={6}>
            "Puerto Peñasco, Sonora, México. <br/>            
            Joya Turística del Noroeste de México, <br/>
            Puerto Pesquero y Productor de Energías Limpias" <br/>
        </Paper>
        <Paper elevation={6}>
            "$1,800 Millones USD Invertidos los últimos 24 años. <br/>
             $500 Millones USD en primer semestre de 2023. <br/>
             Derrama económica de gran peso en Sonora." <br/>
        </Paper>
        <Paper elevation={6}> 
             "Las cifras inmobiliarias aumentan año tras año. <br/>
             Casas y Terrenos parecen cada vez más inalcanzables. <br/>
             Precios de reventa altos y financiamientos costosos."
        </Paper>
        <Paper elevation={6}>
            "Obten un pedazo de esta tierra para tí y tu familia. <br/>
            Directo de ejidatarios fundadores de este Puerto. <br/>
            ¡¡¡Al menor costo y además: facilidad de pagos!!!"
            </Paper>
        
    
    </Box>
    </div>
  );
}

export default Cards