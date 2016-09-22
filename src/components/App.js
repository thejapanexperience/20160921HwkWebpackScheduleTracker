const React = require('react');
const EventForm = require('./EventForm');
const EventList = require('./EventList');
const EventEdit = require('./EventEdit');

const App = React.createClass({

 getInitialState() {
  return {
    events: [],
    editId:"",
    showEditForm: false,
    showEventForm: true
    }
},

  componentWillMount() {
  
    const serializedData = localStorage.savedState;
    let savedState;
  
    try {
      savedState = JSON.parse(serializedData);
      this.setState(savedState);
    } catch(err) {}
      /* can do nothing because names is already an empty array*/
  },
  
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate next state', nextState)

    const serializedData = JSON.stringify(nextState);

  
    localStorage.savedState=serializedData;
  },
  
  sortEvents(events) {
    events.sort(function(a,b) {return (a.eventTimeStart > b.eventTimeStart) ? 1 : ((b.eventTimeStart > a.eventTimeStart) ? -1 : 0);} ); 
    console.log('sorted events' ,events)
    this.setState({events: events, showEditForm: false, showEventForm: true})
  },
  
  
  addEvent(newEvent) {
    let { events } = this.state
    this.sortEvents([...events, newEvent])
  },
  
  editEvent(id){
    let editId = id
    this.setState({
      editId,
      showEditForm: true,
      showEventForm: false
    })
  },
  
  
  deleteEvent(id) {
    let{ events } = this.state;
    this.sortEvents([events.filter(event => event.id !== id)])
  },
  
  
 render() {
  const { events, editId } = this.state;


  return(
    <div className="container">
      <h1>Richard's Schedule Tracker App <img src="image.jpg"  className="img-responsive img-rounded img-thumbnail" width="150px" alt=""/></h1>
      <hr/>
      <EventForm 
      addEvent={this.addEvent}
      showEventForm={this.state.showEventForm} 
      />
      <EventEdit
      showEditForm={this.state.showEditForm}
      events={events}
      editId={editId}
      sortEvents={this.sortEvents}
      />
      <hr/>
      <EventList 
      events={events}
      deleteEvent={this.deleteEvent}
      editEvent={this.editEvent} 
      />
      <hr/>
    </div>
    )
 }
})

module.exports = App;