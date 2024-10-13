import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';

// import { styled } from '@mui/material/styles';
// import BasicStack from './basicstack';
import FetchTrialPaperStack from './components/FetchTestView';

import PrimarySearchAppBar from './appbar';

export default function MyResponsiveGrid() {
    return (
        <>
            <PrimarySearchAppBar/>
            <FetchTrialPaperStack/>
        </>
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