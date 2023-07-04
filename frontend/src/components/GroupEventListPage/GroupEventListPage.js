import { NavLink } from "react-router-dom";
import "./GroupEventListPage.css";
import GroupsList from "../Groups/GroupsList";
import EventsList from "../Events/EventsList";

function GroupEventListPage({ showtype }) {
  return (
    <div className="group-event-main">
      <div className="event-or-group-container">
        <NavLink to="/events" className="event-or-group">
          Events
        </NavLink>
        <NavLink to="/groups" className="event-or-group">
          Groups
        </NavLink>
      </div>
      <section className="group-event-list-containter">
        {showtype === "groups" ? <GroupsList /> : <EventsList />}
      </section>
    </div>
  );
}

export default GroupEventListPage;
