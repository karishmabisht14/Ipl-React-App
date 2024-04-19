import { Input } from "antd";

const Search = ({ searchObj, setSearchObj }) => {
  return (
    <Input.Search
      placeholder="Search here"
      style={{ width: 500 }}
      onSearch={(search) => setSearchObj({ ...searchObj, search })}
    />
  );
};

export default Search;
