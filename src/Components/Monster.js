import React from "react";
import { useSelector } from "react-redux";
import ProgressBar from "./ProgressBar";

const Monster = () => {
  const monster = useSelector((state) => state.fight.monster);

  if (!monster) {
    return "Y'a pas de monster";
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="card-monstre col-sm-12">
            <div id="monsterCard">
              <div className="text-center">
                <div className="">
                  {/* <div className="col-sm-2 offset-sm-3"> */}
                  {/* <span
                      className="badge badge-danger ml-2 "
                      id="degatSpanMonster"
                    ></span> */}
                  <img
                    className="image_player"
                    src={`images/oropo.png`}
                    alt="monster"
                  />
                  {/* </div> */}
                  {/* <div id="comboOnMonster" className="col-sm-6"></div> */}
                </div>
              </div>
              <h4 className="card-title">Oropo</h4>
              <ProgressBar
                pv={monster.pv}
                pvMax={monster.pvMax}
                bgType="bg-danger"
                faType="fa-heart"
                barName=" : pv"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Monster;
