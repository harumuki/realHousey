import React from "react";
import HouseSearchFilter from "../HouseSearchFilter/HouseSearchFilter";
import HouseSearchList from "../HouseSearchList/HouseSearchList";
import { HouseConsumer, withHouseConsumer } from "../../Context";
import Loading from "../Loading/Loading";

const HouseContainer = ({ context }) => {
  const { loading, sortedHouses, houses } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <HouseSearchFilter houses={houses} />
      <HouseSearchList houses={sortedHouses} />
    </div>
  );
};

export default withHouseConsumer(HouseContainer);

// import React from "react";
// import HouseSearchFilter from "../HouseSearchFilter/HouseSearchFilter";
// import HouseSearchList from "../HouseSearchList/HouseSearchList";
// import { HouseConsumer } from "../../Context";
// import Loading from "../Loading/Loading";

// const HouseSearchContainer = () => {
//   return (
//     <HouseConsumer>
//       {(value) => {
//         const { loading, sortedHouses, Houses } = value;

//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             <HouseSearchFilter houses={houses} />
//             <HouseSearchList houses={sortedHouses} />
//           </div>
//         );
//       }}
//     </HouseConsumer>
//   );
// };

// export default HouseSearchContainer;
