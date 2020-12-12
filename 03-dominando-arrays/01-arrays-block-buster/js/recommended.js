import movies from './movies.js'
import render from './render.js'

const $button = recommended

$button.addEventListener('click', () => {
    render(setRecommendedMovies(movies))
})

function setRecommendedMovies(movies) {
    return movies.map((movie, i) => {
        return { ...movie, recommended: movie.vote_average > 7 }
    })
}