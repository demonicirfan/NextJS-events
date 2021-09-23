// inside dummy data we have a funciton that reurn DUMMY_EVENTS.filter((event)=>event.isFeatured)
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList />
      </ul>
    </div>
  );
};

export default HomePage;
