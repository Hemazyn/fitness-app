export const exerciseOptions = {
     method: 'GET',
     headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': "4bbd10493dmshdf8f70597e94910p1ae034jsn6e41ff18977f"
          // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
     }
}
export const youtubeOptions = {
     method: 'GET',
     headers: {
          'X-RapidAPI-Key': '4bbd10493dmshdf8f70597e94910p1ae034jsn6e41ff18977f',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
     }
};
export const fetchData = async (url, options) => {
     const response = await fetch(url, options);
     const data = await response.json();

     return data;
}
