import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client";

const CreateCrewmate = () => {
  const [crewmate, setCrewmate] = useState({name: "", speed: 0, color: ""})

  const colorOptions = ["Red", "Blue", "Green", "Light Green", "Brown", "Dark Green", "Purple", "White", "Black", "Yellow", "Orange", "Pink"]

  async function create(){
    await supabase
      .from("Crewmates")
      .insert({ name: crewmate.name, speed: crewmate.speed, color: crewmate.color })

    window.location = "/";
  }


  return (
    <div className="createCrewmate">
      <div className="createSection">
        <h2 className="title">Create a new Crewmate</h2>
        <form>
          <label for="name">Name</label> <br />
          <input type="text" id="name" name="title" required onChange={e => setCrewmate({...crewmate, name: e.target.value})} />
          <br />
          <br />
          <label for="speed">Speed(mph)</label>
          <br />
          <input type="number" id="speed" name="speed" required onChange={e => setCrewmate({...crewmate, speed: e.target.value})} />
          <br />
          <br />
          <label for="color">Color</label>
          <br />
          <div className="radioSection">
            {colorOptions.map((colors) => {
              return (<div className="radio">
                <input type="radio" id={colors.toLowerCase().split(" ").join("")} name="color" value={colors.toLowerCase().split(" ").join("")} onChange={e => setCrewmate({...crewmate, color: colors})} />
                {colors}
            </div>)
            })}
          </div>
          <br />
          <button id="submit" onClick={create}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCrewmate;
