import React, { ChangeEvent } from "react";

interface ISearchBoxProps {
  searchChange(event: ChangeEvent<HTMLInputElement>): void;
}

const SearchBox: React.FunctionComponent<ISearchBoxProps> = ({
  searchChange,
}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
