import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled'

const RoleCard = styled(Card)`
    width: 45%;
    @media (max-width: 600px) {
        width: 95%;
    }
`

const RoleCardContent = styled(CardContent)`
    padding-bottom: 16px !important;
    background-color: #a6aac4;
`

function Application({ data }) {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{data.nama_aplikasi}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ display: 'flex', justifyContent: 'center', gap: '4%' }}>
                {data.roles?.map(el => {
                    return (
                        <RoleCard>
                            <RoleCardContent sx={{ textAlign: 'center' }}>
                                <Typography>
                                    {el.nama_role.toUpperCase()}
                                </Typography>
                            </RoleCardContent>
                        </RoleCard>
                    )
                })}
            </AccordionDetails>
        </Accordion>
    )
}

export default Application
