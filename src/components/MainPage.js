import React, {useEffect, useState} from "react";
import Table from "../UI/Table/Table"
import classes from "./MainPage.module.css";
import IconButton from "../UI/IconButton/IconButton"
import { RiDeleteBin6Line } from "react-icons/ri";


const MainPage = () => {
  const rowLength = [2, 3, 3, 3, 1];
  const [courses, setCourses] = useState ([]);
  const [isDeletePopUpOpened, setIsDeletePopUpOpened] = useState(false);

    const headerData = [
        {
          name: "Year",
          col: rowLength[0],
        },
        {
          name: "Course ID",
          col: rowLength[1],
        },
        {
          name: "Course Name",
          col: rowLength[2],
        },
        {
          name: "Instructor",
          col: rowLength[3],
        },
      ];

      useEffect(() => {
        getCourses();
      }, []);
      const getCourses = async () => {
        const response = await fetch("http://localhost:3002/getCourses");
        const data = await response.json();
        setCourses(data);
      }

      const deleteCourseHandler = async (data) => {
        
        try {
          const deleteUser = await fetch(
            `http://localhost:3002/courseDelete/${data.courseid}`,
            {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            
            }
          ).then((response) => {
            if (response.statusText.includes("OK")) {
              setCourses(courses.filter((item) => item.courseid !== data.courseid));
    
              alert("You have successfully deleted course " + data.coursename);
            } else {
              throw new Error("User not found!");
            }
          });
        } catch (err) {
          setIsDeletePopUpOpened(false);
          alert(
            "An error happened when deleting that course.\nError Details: " +
              err.message
          );
        }
      };
    
    

    return (
        <div>
            <h2>Courses </h2>
            <hr></hr>
            

<Table
       
        headerData={headerData}
        rowData={courses
          .map((data) => ({
            courseyear: data.courseyear,
            courseid: data.courseid,
            coursename: data.coursename,
            instructor: data.instructor,
            button: (
              <IconButton
                onClick={() => deleteCourseHandler(data)}
                iconCss={classes.iconCss}
                iconButton={<RiDeleteBin6Line />}
              />
            ),
          }))}
        rowLength={rowLength}
        size={{ height: "66.8vh", width: "70vw" }}
      />

               
            
        </div>
    )
 }

 export default MainPage