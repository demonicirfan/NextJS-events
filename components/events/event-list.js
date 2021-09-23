import EventItem from './event-item';

const EventList = (props) => {
  const { items } = props;

  return (
    <div>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          locaiton={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </div>
  );
};

export default EventList;
