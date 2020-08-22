import React from "react";
import "./AgentFinder.style.scss";
import { withHouseConsumer } from "../../Context";

import AgentPage from "../../Components/AgentPage/AgentPage";
import Loading from "../../Components/Loading/Loading";
import Content from "../../Components/Content-Container/Content";

const AgentFinder = ({ context }) => {
  const { loading, houses } = context;
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="agent-finder-content">
        <Content
          heading1="Agents"
          heading2="All Of Our Agents"
          para="All The Agents Are In The Current Listing Data Of The Last Update"
        />
      </div>
      <div className="list-item-boxx">
        {/* flex wrap */}
        <div className="list-item--box">
          {houses.map((item) => {
            return <AgentPage key={item.id} house={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default withHouseConsumer(AgentFinder);
