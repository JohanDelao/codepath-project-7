import { useParams } from "react-router-dom";
import { supabase } from "../client";
import { useEffect, useState } from "react";
import fast from "../../public/fast.png";
import regular from "../../public/walking.png";
import slow from "../../public/turtle.png";

const EditCrewmate = () => {
  let params = useParams();
  const [crewmate, setCrewmate] = useState({ name: "", speed: "", color: "" });

  const [edit, setEdit] = useState(false);

  const colorOptions = [
    "Red",
    "Blue",
    "Green",
    "Light Green",
    "Brown",
    "Dark Green",
    "Purple",
    "White",
    "Black",
    "Yellow",
    "Orange",
    "Pink",
  ];

  async function populate() {
    const { data } = await supabase
      .from("Crewmates")
      .select()
      .eq("id", params.id);
    setCrewmate(data[0]);
    console.log("data: ", data[0]);
  }

  function editFunc(e){
    e.preventDefault();
    setEdit(true)
  }

  const updateCrew = async (event) => {
    event.preventDefault();

    await supabase
    .from('Crewmates')
    .update({ name: crewmate.title, speed: crewmate.speed, color: crewmate.color})
    .eq('id', params.id);

    window.location = "/";
}

  useEffect(() => {
    populate();
  }, []);

  return (
    <div className="editSection">
      <div className="createSection">
        <h2 className="title">Crewmate Stats</h2>
        <form>
          <label for="name">Name</label> <br />
          {edit == true ? (
            <input
              type="text"
              id="name"
              name="title"
              defaultValue={crewmate.name}
              onChange={e => setCrewmate({...crewmate, name: e.target.value})}
              required
            />
          ) : (
            <p className="display">{crewmate.name}</p>
          )}
          <br />
          <br />
          <label for="speed">Speed(mph)</label>
          <br />
          <div className="speedSection">
            {edit == true ? (
              <input
                type="string"
                id="speed"
                name="speed"
                onChange={e => setCrewmate({...crewmate, speed: e.target.value})}
                defaultValue={crewmate.speed.toString()}
              />
            ) : (
              <p className="display">{crewmate.speed}</p>
            )}
          </div>
          <br />
          <br />
          <label for="color">Color</label>
          <br />
          <div className="radioSection">
            {edit == true &&
              colorOptions.map((colors) => {
                console.log(crewmate.color == colors);
                return (
                  <div className="radio">
                    <input
                      type="radio"
                      id={colors.toLowerCase().split(" ").join("")}
                      name="color"
                      value={colors.toLowerCase().split(" ").join("")}
                      onChange={e => setCrewmate({...crewmate, color: colors})}
                      defaultChecked={crewmate.color == colors ? true : false}
                    />
                    {colors}
                  </div>
                );
              })}
            {edit == false && (
              <div>
                <p className="colorDisplay">{crewmate.color}</p>
              </div>
            )}
          </div>
          <br />
          {edit == true ? (
            <button className="submit" onClick={(e) => updateCrew(e)}>Change</button>
          ) : (
            <button className="editButton" onClick={(e) => editFunc(e)}>
              EDIT
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditCrewmate;
