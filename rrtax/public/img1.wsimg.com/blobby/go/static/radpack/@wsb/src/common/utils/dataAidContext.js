import React, { createContext } from "react";
import PropTypes from "prop-types";

const DataAidContext = createContext();

export function DataAidProvider({ children, dataAids = {} }) {
  return (
    <DataAidContext.Provider value={dataAids}>
      {children}
    </DataAidContext.Provider>
  );
}

DataAidProvider.propTypes = {
  children: PropTypes.any,
  dataAids: PropTypes.object,
};

export default DataAidContext;
