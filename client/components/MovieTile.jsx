import { lightblue } from "color-name";
import React, { useState, useEffect } from "react";
import axios from 'axios';


function MovieTile (props) {
    // lift state up - pass in as props?
    const [star, setStar] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState(/*fetch*/);
    const [poster, usePoster] = useState(/*fetch*/);

    const borderStyle = {
        border: '1px',
        height: '200px',
        width: '150px',
        backgroundColor: 'DodgerBlue',
        borderColor: 'black'
    };

    // const mystyle = {
    //     color: "white",
    //     backgroundColor: "DodgerBlue",
    //     padding: "10px",
    //     fontFamily: "Arial"
    //   };
    
    return (        
        <div id='movieTile' style={borderStyle}>
            <div id='poster'>
                <div id='star'>
                    <p id='description'>
                        Movie description here
                    </p>
                </div>
            </div>
        </div>
    );
}

// className='' <- how you link up the style sheet class in react
// style={"color: blue; border: 1px; height: 100px; width: 50px"}
export default MovieTile;