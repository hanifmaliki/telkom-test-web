import React, { useEffect, useState } from 'react'
import { getPegawai } from '../Axios/GetData';
import { OuterContainer, InnerContainer, Title, Desc } from './StyledComponents';
import Application from './Application';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CircularProgress } from '@mui/material';

const Main = () => {
    const [pegawai, setPegawai] = useState({});

    useEffect(() => {
        async function fetchItems() {
            const data = await getPegawai();
            setPegawai(data)
        }
        fetchItems();
    }, [])

    return (
        <OuterContainer>
            {
                pegawai.fullname ?
                    <InnerContainer elevation={3}>
                        <Card>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Title>{pegawai.fullname}</Title>
                                <Desc>{pegawai.username}</Desc>
                            </CardContent>
                        </Card>
                        {
                            pegawai.aplikasi?.map((el, idx) => {
                                return (
                                    <Application
                                        key={idx}
                                        data={el}
                                    />
                                )
                            })
                        }
                    </InnerContainer>
                    :
                    <CircularProgress />
            }
        </OuterContainer>
    )
}

export default Main
