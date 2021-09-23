// inside dummy data we have a funciton that reurn DUMMY_EVENTS.filter((event)=>event.isFeatured)
import { getFeaturedEvents } from "../dummy-data";


const HomePage = () => {
    const featuredEvents = getFeaturedEvents();


    return (
        <div>
            <ul>
                
            </ul>
        </div>
    )
}

export default HomePage
