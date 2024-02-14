import { createApi, fetchBaseQuery } from '@reduxjs/toolkit';

const cryptoNewsHeaders = {
        'X-RapidAPI-Key': process.env.REACT_APP_NEWS_API_KEY,
        'X-RapidAPI-Host': 'news-api14.p.rapidapi.com'
}

const baseUrl = 'https://news-api14.p.rapidapi.com/top-headlines';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;


