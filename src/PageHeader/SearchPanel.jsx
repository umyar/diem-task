import React from "react";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Search from "@material-ui/icons/Search";

const SearchPanel = () => {
  return (
    <FormControl className="header-search">
      <Input
        id="input-with-icon-adornment"
        placeholder="Search..."
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchPanel;
