import rawMoviesList from './movies.js'

const movieList = rawMoviesList.reduce((list, movie) => {
            // set(key,value)
    list.set(movie.id, movie)
    return list
}, new Map()) // {} == Map -> key pueden ser primitivos, hasta una function - tiene metodos como set

const all = rawMoviesList.map(movie => movie.id)

const popular = rawMoviesList.reduce((list, movie) => {
    if(movie.vote_average > 7) {
        list.push(movie.id)
    }
    return list
}, [])

const notPopular = rawMoviesList.reduce((list, movie) => {
    if(movie.vote_average <= 7) {
        list.push(movie.id)
    }
    return list
}, [])

export {
    movieList,
    all,
    popular,
    notPopular
}

