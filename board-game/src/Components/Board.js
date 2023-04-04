import React, { useState, useEffect } from "react";
import styles from "../styles/board.module.css";

import Cell from "./Cell";

const Board = () => {
  const [cells, setCells] = useState([]);
  // rowind, colind
  const [selected, setSelected] = useState([-1, -1]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < 10; ++i) {
      temp.push([]);
      for (let j = 0; j < 20; ++j) {
        temp[i].push({
          visible: false,
          options: [],
          text: "",
        });
      }
    }

    addBoard(temp);

    setCells(temp);
  }, []);

  return (
    <div className={styles.boardContainer}>
      {cells.map((row, rowInd) => {
        return (
          <div className={styles.boardRow}>
            {row.map((cell, colInd) => {
              return (
                <Cell
                  visible={cell.visible}
                  options={cell.options}
                  text={cell.text}
                  clicked={rowInd === selected[0] && colInd === selected[1]}
                  onClick={() => {
                    setSelected([rowInd, colInd]);
                  }}
                  colour={cell.colour}
                  scenarioText={cell.scenarioText}
                  outcomes={cell.outcomes}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;

const addBoard = (temp) => {
  /**
   * Choose which cells are active and colour
   */
  temp[4][0] = {
    visible: true,
    options: [],
    text: "Start",
    colour: "#FFF",
  };

  temp[4][1] = {
    visible: true,
    options: [],
    text: "",
    colour: "#F7E705",
  };

  temp[3][1] = {
    visible: true,
    options: [],
    text: "Gender",
    colour: "#F7E705",
  };

  temp[2][1] = {
    visible: true,
    options: [],
    text: "Religion",
    colour: "#F7E705",
  };

  temp[2][2] = {
    visible: true,
    options: [],
    text: "",
    colour: "#F7E705",
  };

  temp[2][3] = {
    visible: true,
    options: [],
    text: "",
    colour: "#F7E705",
  };

  temp[1][3] = {
    visible: true,
    options: [],
    text: "Education",
    colour: "#c126f0",
  };

  temp[3][3] = {
    visible: true,
    options: [],
    text: "Career",
    colour: "#2ee681",
  };

  temp[3][4] = {
    visible: true,
    options: [],
    text: "Money",
    colour: "#2ee681",
  };

  temp[3][5] = {
    visible: true,
    options: ["Remove the application from your phone.", "blah blah."],
    outcomes: ["Lose money - 500$", "War breaks out - 1 life"],
    text: "Event",
    colour: "#f5366f",
    scenarioText:
      "You've been using your handy paid news app for years now for any trending current events and to keep up to date with the world. However, recently, you noticed that there has been a rise in articles that have been describing <your religion> as barbaric. You think nothing of it at first as you assume it’s a rare occurrence. However, you notice it more and more as you begin to believe the news source you once enjoyed may have become a hotspot for <your religion> hate speech. You also know that it is one of the most popular news sources among your family, friends, and community. You are concerned that some of the rhetoric in these articles will have an impact or rub off on the people you know. What do you do?",
  };

  temp[3][6] = {
    visible: true,
    options: [],
    text: "Money",
    colour: "#2ee681",
  };

  temp[3][7] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#f5366f",
  };

  temp[4][7] = {
    visible: true,
    options: [],
    text: "Money",
    colour: "#2ee681",
  };
  temp[4][7] = {
    visible: true,
    options: [],
    text: "Money",
    colour: "#2ee681",
  };
  temp[4][8] = {
    visible: true,
    options: [],
    text: "Money",
    colour: "#2ee681",
  };

  temp[4][9] = {
    visible: true,
    options: [],
    text: "Money",
    colour: "#2ee681",
  };

  temp[4][10] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#f5366f",
  };
  temp[3][10] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#f5366f",
  };
  temp[2][10] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[1][10] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[1][9] = {
    visible: true,
    options: [],
    text: "",
    colour: "#c126f0",
  };
  temp[1][9] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#c126f0",
  };
  temp[1][9] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#c126f0",
  };
  temp[1][8] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#c126f0",
  };
  temp[1][7] = {
    visible: true,
    options: [],
    text: "",
    colour: "#c126f0",
  };
  temp[1][6] = {
    visible: true,
    options: [],
    text: "",
    colour: "#c126f0",
  };
  temp[1][5] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#c126f0",
  };
  temp[1][4] = {
    visible: true,
    options: [],
    text: "",
    colour: "#c126f0",
  };

  temp[1][11] = {
    visible: true,
    options: [],
    text: "Life",
    colour: "#56a0f5",
  };
  temp[1][12] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[1][13] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#56a0f5",
  };
  temp[1][14] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#56a0f5",
  };
  temp[1][15] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#56a0f5",
  };
  temp[1][16] = {
    visible: true,
    options: [],
    text: "Family",
    colour: "#56a0f5",
  };
  temp[1][17] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[1][18] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#56a0f5",
  };
  temp[2][18] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[3][18] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[4][18] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#56a0f5",
  };
  temp[5][18] = {
    visible: true,
    options: [],
    text: "",
    colour: "#56a0f5",
  };
  temp[5][17] = {
    visible: true,
    options: [],
    text: "Research",
    colour: "#c126f0",
  };
  temp[5][16] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#c126f0",
  };
  temp[5][15] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#c126f0",
  };
  temp[6][15] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#c126f0",
  };
  temp[7][15] = {
    visible: true,
    options: [],
    text: "Money",
    colour: "#c126f0",
  };
  temp[6][18] = {
    visible: true,
    options: [],
    text: "Career",
    colour: "#2ee681",
  };
  temp[7][18] = {
    visible: true,
    options: [],
    text: "Career",
    colour: "#2ee681",
  };
  temp[8][18] = {
    visible: true,
    options: [],
    text: "Career",
    colour: "#2ee681",
  };
  temp[8][17] = {
    visible: true,
    options: [],
    text: "Money",
    colour: "#2ee681",
  };
  temp[8][16] = {
    visible: true,
    options: [],
    text: "Money",
    colour: "#2ee681",
  };
  temp[8][15] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#56a0f5",
  };
  temp[8][14] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#56a0f5",
  };
  temp[8][13] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#56a0f5",
  };
  temp[8][12] = {
    visible: true,
    options: [],
    text: "Retire",
    colour: "#f59e42",
  };
  temp[8][11] = {
    visible: true,
    options: [],
    text: "Event",
    colour: "#f59e42",
  };
  temp[9][11] = {
    visible: true,
    options: [],
    text: "Finish",
    colour: "#e6dbd1",
  };
};
