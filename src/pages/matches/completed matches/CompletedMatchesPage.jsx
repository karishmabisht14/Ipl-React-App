import MatchesList from "./MatchesList";
import Filters from "./Filters";
import Search from "./Search";
import Seasons from "./Seasons";
import { useState } from "react";

const CompletedMatchesPage = () => {
  const [searchObj, setSearchObj] = useState({});

  return (
    <>
      <Filters searchObj={searchObj} setSearchObj={setSearchObj} />
      <Search searchObj={searchObj} />
      <Seasons searchObj={searchObj} />
      <MatchesList searchObj={searchObj} />
    </>
  );
};

export default CompletedMatchesPage;
