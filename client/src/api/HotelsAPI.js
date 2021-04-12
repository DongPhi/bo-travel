import{useState, useEffect} from 'react'
import axios from 'axios'

function HotelsAPI(){
    const [hotels, setHotels] = useState([])

    const getHotels = async () =>{
        const res = await axios.get('/api/hotel')
        setHotels(res.data.hotels)
    }

    useEffect(() =>{
        getHotels()
    },[])

    return{
        hotels: [hotels, setHotels]
    }
}

export default HotelsAPI