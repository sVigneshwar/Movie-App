export const getMovieData = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGYzYjg1MGYxOGRjZDE1NWE4NDJjM2FjYWUxMWYzZCIsIm5iZiI6MTc2ODU1OTU0NS4xMDMwMDAyLCJzdWIiOiI2OTZhMTNiOWU4OGZkYzc3ZjdmNThjNTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SUX9e_0t5RrDmO_Sy3tgSk2oetmGCUkDm_Y2OCxm-DM'
      }
    };

    const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    const data = await res.json()
    return data.results
}