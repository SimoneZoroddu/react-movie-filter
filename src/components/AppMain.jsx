import { useEffect, useState } from "react"


export default function AppMain({ array }) {
    //console.log(array);

    const singleArrayGenre = array.map((singleArray) => singleArray.genre)
    //console.log(singleArrayGenre);
    const settedGenre = [...new Set(singleArrayGenre)]
    //console.log(settedGenre);


    const [genre, setGenre] = useState('')
    //console.log(genre);
    const [filmsFiltered, setfilmsFiltered] = useState([])

    useEffect(() => {
        const filteredFilms = array.filter(filterFilms => filterFilms.genre.includes(genre))
        //console.log(filteredFilms);
        setfilmsFiltered(filteredFilms)

    }, [genre])


    return (
        <>
            <select name="Films" id="films" value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="">Seleziona un genere</option>
                {
                    settedGenre.map((singleGenre, index) => (

                        <option key={index} value={singleGenre} > {singleGenre}</option>

                    ))

                }
            </select >
            <ul>
                {
                    filmsFiltered.map((singleArray, index) => (

                        <li key={index}>{singleArray.title}</li>

                    ))

                }
            </ul>
        </>
    )
}





/*<select name="cars" id="cars">

                {
                    array.map(({ title, genre }) => (
                            
                            <option value={title} key={title}>{title}</option>
                    
                    ))

                }

    </select>
*/