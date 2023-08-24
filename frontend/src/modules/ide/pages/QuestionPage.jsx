import React from 'react'
import Container from '@mui/material/Container';
import Header from '../../../shared/components/Header';
import Grid from '@mui/material/Grid';
import Question from '../components/Question';
import Ide from '../components/Ide';
const QuestionPage = () => {
    return (<>
        <Container>
            <Header />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Question/>
                </Grid>
                <Grid item xs={6}>
                    <Ide/>
                </Grid>
            </Grid>
        </Container>
    </>
    )
}

export default QuestionPage