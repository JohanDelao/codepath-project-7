import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/amongUs.png";
import { supabase } from "../client";

const CrewmateGallery = () => {
  const [crewmates, setCrewmates] = useState([]);

  async function fetchCrewmates() {
    const { data } = await supabase.from("Crewmates").select();
    setCrewmates(data);
    console.log("data: ", data);
  }

  useEffect(() => {
    fetchCrewmates();
  }, []);

  async function deleteCrewmate(id) {
    await supabase.from("Crewmates").delete().eq("id", id);

    window.location = "http://127.0.0.1:5173/";
  }

  return (
    <div className="mainGallery">
      <div className="gallerySection">
        <h2 className="title">Your Crewmate Gallery!</h2>
        <div className="Crewmates"></div>
        {crewmates.length > 0 ? (
          <div className="Crewmates">
          {crewmates.map((crewmate) => {
            return (
                <div className="Crewmate">
                  <div className="bio">
                    <img src={logo} height={200} />
                    <div className="stats">
                      <div className="stat">
                        <p className="label">Name:</p>
                        <p className="data">{crewmate.name}</p>
                      </div>
                      <div className="stat">
                        <p className="label">Speed:</p>
                        <p className="data">{crewmate.speed} mph</p>
                      </div>
                      <div className="stat">
                        <p className="label">Color:</p>
                        <p className="data">{crewmate.color}</p>
                      </div>
                    </div>
                  </div>
                  <Link to={`/EditCrewmate/${crewmate.id}`}>
                    <button className="editButton">INFO</button>
                  </Link>
                  <button
                    className="deleteButton"
                    onClick={(e) => deleteCrewmate(crewmate.id)}
                  >
                    DELETE
                  </button>
                </div>
            );
          })
        }
        </div>
        ) : (
          <div className="noCrew">
            <p className="nothingMessage">You haven't made a crewmate yet!</p>
            <Link to={`/CreateCrewmate/`}>
              <button className="createButton">Create one!</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default CrewmateGallery;
