import { useState } from "react";
import CompletedMatchesPage from "./completed matches/CompletedMatchesPage";
import UpcommingMatchesPage from "./upcomming matches/UpcommingMatchesPage";

const MatchesWrapper = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(false)}>Upcomming</button>
      <button onClick={() => setShow(true)}>Completed</button>
      {!show && <UpcommingMatchesPage />}
      {show && <CompletedMatchesPage />}
    </>
  );
};

export default MatchesWrapper;
