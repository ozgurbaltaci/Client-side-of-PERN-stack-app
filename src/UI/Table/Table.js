import React, { useState, useCallback } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import classes from "./Table.module.css";

const Table = (props) => {
 
  return (
    <div className={classes.container} style={{ width: props.size.width }}>
      <TableHeader headerData={props.headerData} rowLength={props.rowLength} />
      <div
        className={classes.rowContainer}
        style={{
          transition: "box-shadow 0.3s",
          height: props.size.height,
          width: props.size.width,
        }}
      >
        {
          props.rowData.map((row) => (
            <div key={Math.random()}>
              <TableRow
               key={Math.random()}
               rowData={row}
               
               rowLength={props.rowLength}
             />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Table;
