import { Row } from "../../types/game/types";

export const rows: Row[] = [
  {
    type: "forest",
    trees: [
      { tileIndex: -3, height: 50 },
      { tileIndex: 2, height: 30 },
      { tileIndex: 5, height: 50 },
    ],
  },
  {
    type: "car",
    direction: false,
    speed: -2,
    vehicles: [{ initialTileIndex: 2, color: 0xff0000 }],
  },
  {
    type: "truck",
    direction: true,
    speed: -3,
    vehicles: [{ initialTileIndex: -4, color: 0x00ff00 }],
  },
];
