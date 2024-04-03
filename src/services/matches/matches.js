import crud from "../../utils/crud";
import matches from "./matches.json";

let matchesList = matches;

export function getMatches() {
  return new Promise((resolve) => {
    matchesList = crud.get(matchesList);
    resolve(matchesList);
  });
}

export function addMatch(newMatch) {
  return new Promise((resolve) => {
    matchesList = crud.add(matchesList, newMatch);
    resolve(matchesList);
  });
}

export function removeMatch(matchesList, matchId, pk) {
  return new Promise((resolve) => {
    matchesList = crud.remove(matchesList, matchId, pk);
    resolve(matchesList);
  });
}

export function updateMatch(matchesList, updatedMatch, pk) {
  return new Promise((resolve) => {
    matchesList = crud.update(matchesList, updatedMatch, pk);
    resolve(matchesList);
  });
}

export default function Main() {
  addMatch({ match_id: 2, match_no: 2 }).then((matchList) => {
    console.log(matchList);
    removeMatch(matchList, 1, "match_id").then((list) => {
      console.log("list", list);
    });
  });
}
