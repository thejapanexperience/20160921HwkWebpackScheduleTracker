const React = require('react');

const EventList = props => {
  let { events, deleteEvent, editEvent } = props;
  console.log (events)

  return (
    <div>
    <table className="table">
    <thead>
    <tr>
    <th>Event Name</th>
    <th>Event Start Time</th>
    <th>Event End Time</th>
    <th>Event Importance</th>
    <th>Edit</th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {events.map((event) => (
      <tr key={event.id}>
      <td>{event.eventName}</td>
      <td>{event.eventTimeStart}</td>
      <td>{event.eventTimeEnd}</td>
      <td>{event.eventImportance}</td>
      <td>
      <button onClick={()=> editEvent(event.id)} className="btn btn-sm btn-info">Edit Event</button>
      </td>
      <td>
      <button onClick={()=> deleteEvent(event.id)} className="btn btn-sm btn-danger">Delete Event</button>
      </td>
      </tr>
      ))}
    </tbody>
    </table>
    </div>
    )
}

module.exports = EventList;



/*return (
    <ul>
      {events.map((event, i) =>
        <li key={i}>{event}</li>
        )}
    </ul>
    )
*/