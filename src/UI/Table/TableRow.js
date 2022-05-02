import React from "react";
import classes from "./TableRow.module.css";

const TableRow = (props) => {
 
  return (
    <>
      <div
        className={`${classes.item}   row `}
        style={
          props.clickedId === props.rowData.id && props.clickedId !== undefined
            ? { backgroundColor: "rgb(210, 210, 210)" }
            : {}
        }
      >
        {Object.keys(props.rowData).map((id, index) => {
          
            return (
              <div
                key={Math.random()}
                className={`col-${props.rowLength[index]} ${
                  classes.text
                }`}
              >
                {props.rowData[id]}
              </div>
            );
          }
        )}
      </div>
      
    </>
  );
};

export default TableRow;
