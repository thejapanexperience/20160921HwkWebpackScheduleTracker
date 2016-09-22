const React = require('react');

const EventEdit = React.createClass({
  
  submitForm(e) {
    e.preventDefault();
    
    let { eventName, eventTimeStart, eventTimeEnd, eventImportance} = this.refs;

    let { events, editId, showEventForm } = this.props

    events = events.filter(event => event.id !== editId)

    let newEvent = {
        eventName: eventName.value,
        eventTimeStart: eventTimeStart.value,
        eventTimeEnd: eventTimeEnd.value,
        eventImportance: eventImportance.value,
        id: editId
      }

    this.props.sortEvents([...events, newEvent])

  },

  render() {

  let { events, editId, showEditForm } = this.props

  let event = events.filter(event => event.id === editId)[0]


  if (showEditForm){
  return (
   <form onSubmit={this.submitForm}>
        <label htmlFor="eventName">Edit Name : </label> <span>  </span>
        <input htmlFor="eventName" type="text" ref='eventName' defaultValue={event.eventName} required/>
        <hr/>
        <label htmlFor="eventTimeStart">Edit Start Time : </label> <span>  </span>
        <input htmlFor="eventTimeStart" type="time" ref='eventTimeStart' defaultValue={event.eventTimeStart} required/>
        <hr/>
        <label htmlFor="eventTimeEnd">Edit End Time : </label> <span>  </span>
        <input htmlFor="eventTimeEnd" type="time" ref='eventTimeEnd' defaultValue={event.eventTimeEnd} required/>
        <hr/>
        <label htmlFor="eventImportance">Edit Importance : </label> <span>  </span>
        <select className="form-control" id="eventImportance" ref='eventImportance' defaultValue={event.eventImportance} required>
          <option>Super Important</option>
          <option>Important</option>
          <option>Vaguely Important</option>
          <option>Would Be Nice But...</option>
        </select>
        <hr/>
        <button type="submit" className="btn btn-block btn-warning" >Save Changes</button>
      </form>
    )
  }  else {
    return <div></div>
  }
}
})

module.exports = EventEdit;