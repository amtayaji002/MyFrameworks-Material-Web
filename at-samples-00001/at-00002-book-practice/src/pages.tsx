import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';

// import { styled } from '@mui/material/styles';
// import BasicStack from './basicstack';

import PrimarySearchAppBar from './appbar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function MyResponsiveGrid() {
    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <PrimarySearchAppBar/>
            <Grid container spacing={2}>
                <Container>
                    <Item>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                    <Item>4</Item>
                    <Item>5</Item>
                    <Item>6</Item>
                    
                    {Array.from(Array(6)).map((_, index) => (
                    <Grid key={index} size="grow">
                        <Item>{index} + 1</Item>
                    </Grid>
                    ))}
                </Container>
            </Grid>
        </Box>
    );
}

// export default function MyResponsiveGrid() {
//     return (
//         <Grid container spacing={3} sx={{ flexGrow: 1 }}>
//             <Grid size={{ xs: 6, md: 2 }} offset={{ xs: 3, md: 0 }}>
//                 <Item>1</Item>
//             </Grid>
//             <Grid size={{ xs: 4, md: 2 }} offset={{ md: 'auto' }}>
//                 <Item>2</Item>
//             </Grid>
//             <Grid size={{ xs: 4, md: 2 }} offset={{ xs: 4, md: 0 }}>
//                 <Item>3</Item>
//             </Grid>
//             <Grid size={{ xs: 'grow', md: 6 }} offset={{ md: 2 }}>
//                 <Item>4</Item>
//             </Grid>
//         </Grid>
//     );
// }