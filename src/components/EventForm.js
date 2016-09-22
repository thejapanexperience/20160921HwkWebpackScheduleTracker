const React = require('react');
const moment = require('moment');

const EventForm = React.createClass({
  submitForm(e) {
    e.preventDefault();
    const { eventName, eventTimeStart, eventTimeEnd, eventImportance } = this.refs;

    let newEvent = {
        eventName: "",
        eventTimeStart: "",
        eventTimeEnd: "",
        eventImportance: "",
        id: uuid()
        /*eventTimeCompare:""*/
      }
    newEvent.eventName = eventName.value;
    newEvent.eventTimeStart = eventTimeStart.value;
    newEvent.eventTimeEnd = eventTimeEnd.value;
/*    newEvent.eventTimeStart = "'"+eventTimeStart.value+"'";
    newEvent.eventTimeEnd = "'"+eventTimeEnd.value+"'";*/
    newEvent.eventImportance = eventImportance.value
/*    eventName.value = '';
    eventTimeEnd.value = '';
    eventTimeStart.value = '';
    eventImportance.value = '';
    eventName.focus();*/
    document.getElementById("eventForm").reset()
    console.log('newEvent.eventTimeCompare ', newEvent.eventTimeCompare)
    this.props.addEvent(newEvent);
  },

  render() {
    
    let { showEventForm } = this.props
    
    console.log('show event form', showEventForm)
    if (showEventForm){

    return(
      <form id="eventForm" onSubmit={this.submitForm}>
        <label htmlFor="eventName">Event Name : </label> <span>  </span>
        <input htmlFor="eventName" type="text" ref='eventName' defaultValue="default"required/>
        <hr/>
        <label htmlFor="eventTimeStart">Event Start Time : </label> <span>  </span>
        <input htmlFor="eventTimeStart" type="time" ref='eventTimeStart' defaultValue="09:00" required/>
        <hr/>
        <label htmlFor="eventTimeEnd">Event End Time : </label> <span>  </span>
        <input htmlFor="eventTimeEnd" type="time" ref='eventTimeEnd' defaultValue="10:00" required/>
        <hr/>
        <label htmlFor="eventImportance">Event Importance : </label> <span>  </span>
        <select className="form-control" id="eventImportance" ref='eventImportance' defaultValue="Important" required>
          <option>Super Important</option>
          <option>Important</option>
          <option>Vaguely Important</option>
          <option>Would Be Nice But...</option>
        </select>
        <hr/>
        <button type="submit" className="btn btn-block btn-success" >Enter Event</button>
      </form>
      )
  }  else {
    return <div></div>
  }
}
})

module.exports = EventForm;