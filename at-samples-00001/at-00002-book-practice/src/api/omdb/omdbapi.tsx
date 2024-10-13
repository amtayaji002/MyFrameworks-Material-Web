import { useState, useEffect } from 'react';

export interface IMovieData {
    Title: string;
    Year: number;
    imdbID: string;
    Type: string;
    Poster: string;
};

export function FetchTest() {
    const [movieData, setMovieData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://www.omdbapi.com/?s=Cosmic&y=2024&apikey=170c39cc'); // Replace YOUR_API_KEY
            const responseData = await response.json();
            const movieData: IMovieData[] = responseData.Search;
            setMovieData(movieData);
        };

        fetchData();
    }, []);

    
    return movieData;
};