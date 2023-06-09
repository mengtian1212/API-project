import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroupsThunk } from "../../../store/groups";
import "./GroupsList.css";

import GroupListCard from "./GroupListCard";

function GroupsList() {
  const groups = Object.values(
    useSelector((state) =>
      state.groups.allGroups ? state.groups.allGroups : {}
    )
  ).filter((group) => !Array.isArray(group));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGroupsThunk());
    window.scroll(0, 0);
  }, [dispatch]);

  if (groups.length === 0)
    return (
      <div className="spinner">
        <img
          src="../../image/Spin-1s-118px.gif"
          alt="Loading in progress"
        ></img>
      </div>
    );

  return (
    <>
      <div id="groups-in-meetfun">Groups in MeetFun</div>
      <div className="list-item">
        {groups.map((group) => (
          <GroupListCard key={group.id} group={group} />
        ))}
      </div>
    </>
  );
}

export default GroupsList;
