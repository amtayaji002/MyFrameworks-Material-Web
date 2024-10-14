import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';

import { IMovieData, FetchTest } from '../api/omdb/omdbapi';


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

    let movieData: IMovieData[] = FetchTest();

    return (
        // Check if movieData is not null before rendering
        movieData ? (
            <Box sx={{ flexGrow: 1, width: '100%' }}>
                <Grid container spacing={5}>
                    <Container>
                        {movieData.map((movie, index) => (
                            <Grid key={index} item xs={12} md={6}>
                                <Item>
                                    <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: '100%', height: 'auto' }} />
                                    <h2>{movie.Title}</h2>
                                    <p>Year: {movie.Year}</p>
                                    <p>Type: {movie.Type}</p>
                                    <p>IMDb ID: {movie.imdbID}</p>
                                </Item>
                            </Grid>
                        ))}
                    </Container>
                </Grid>
            </Box>
        ) : (
            // Render something else if movieData is null
            <div>Loading movie data...</div> 
        )
    );
}
