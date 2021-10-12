import { useState, useEffect } from 'react'
import Plyr from 'plyr-react'
import 'plyr-react/dist/plyr.css'

function Movie() {
    const [sources] = useState([
        {
            "src": "https://stream.voidboost.cc/2/4/1/0/9/1/42a367d4d7669e318dc7f41b03cb72e9:2021101310:OFlVZUVXOTZsUytjNEx6S0ZyZFhBQjJhWVY5KzRISm16bXY0MGQySnhaTDBNWGZrUTA5Ym1GclhNc0xqMGFaUGRSZ3NDRmNnWWVqeG53TUpuNVZUUnc9PQ==/22s82.mp4",
            "type": "video/mp4",
            "size": 360
        },
        {
            "src": "https://stream.voidboost.cc/c5c220ed2baa4cbb48c7ce1abdfc4429:2021101310:OFlVZUVXOTZsUytjNEx6S0ZyZFhBQjJhWVY5KzRISm16bXY0MGQySnhaTDBNWGZrUTA5Ym1GclhNc0xqMGFaUGRSZ3NDRmNnWWVqeG53TUpuNVZUUnc9PQ==/2/4/1/0/9/1/emrwc.mp4",
            "type": "video/mp4",
            "size": 480
        },
        {
            "src": "https://stream.voidboost.cc/2/4/1/0/9/1/42a367d4d7669e318dc7f41b03cb72e9:2021101310:OFlVZUVXOTZsUytjNEx6S0ZyZFhBQjJhWVY5KzRISm16bXY0MGQySnhaTDBNWGZrUTA5Ym1GclhNc0xqMGFaUGRSZ3NDRmNnWWVqeG53TUpuNVZUUnc9PQ==/aduif.mp4",
            "type": "video/mp4",
            "size": 720
        },
        {
            "src": "https://stream.voidboost.cc/5eb37a679ee35238ea0ce0ab7993ab3d:2021101310:OFlVZUVXOTZsUytjNEx6S0ZyZFhBQjJhWVY5KzRISm16bXY0MGQySnhaTDBNWGZrUTA5Ym1GclhNc0xqMGFaUGRSZ3NDRmNnWWVqeG53TUpuNVZUUnc9PQ==/2/4/1/0/9/1/h01ha.mp4",
            "type": "video/mp4",
            "size": 1080
        }
    ])
    const [textAreaValue, setTextAreaValue] = useState('')

    return (
        <div className="movie__wrapper">
            <div className="form__wrapper">
                <form>
                    <input type="text" value={textAreaValue} onChange={(e) => {
                        e.preventDefault()
                        setTextAreaValue(e.target.value)
                    }} />
                </form>
            </div>
            {
                (sources.length != 0) && <Plyr source={
                    {
                        type: "video",
                        sources: [...sources],
                    }
                }
                />
            }
        </div>
    )
}

export default Movie
