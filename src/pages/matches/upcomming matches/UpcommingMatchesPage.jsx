import MatchesList from "./MatchesList";
import Filters from "./Filters";
import Search from "./Search";
import CreateUpdateMatch from "./CreateUpdateMatch";

const UpcommingMatchesPage = () => {
  return (
    <>
      <Filters />
      <Search />
      <CreateUpdateMatch />
      <MatchesList />
    </>
  );
};

export default UpcommingMatchesPage;
