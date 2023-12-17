import { Vector3 } from "three";

type CanvasItem = {
  url: string;
  scale : number;
  position: Vector3;
  rotation?: Vector3;
}

const backZ = -24.05;
const topZ = 6.1;
const leftSideX = -8;
const rightSideX = 8;
const y = 2;
const url = './images/';

export const canvasList: CanvasItem[] = [
  // back 7 pos
  {
    url: `${url}1.jpg`,
    position: new Vector3(-6.6, y, backZ),
    scale: 2,
  },
  {
    url: `${url}2.jpg`,
    position: new Vector3(-4.6, y, backZ),
    scale: 2,
  },
  {
    url: `${url}3.jpg`,
    position: new Vector3(-2.6, y, backZ),
    scale: 2,
  },
  {
    url: `${url}4.jpg`,
    position: new Vector3(-0.4, y, backZ),
    scale: 2,
  },
  {
    url: `${url}5.jpg`,
    position: new Vector3(2, y, backZ),
    scale: 2,
  },
  {
    url: `${url}6.jpg`,
    position: new Vector3(4.5, y, backZ),
    scale: 2,
  },
  {
    url: `${url}7.jpg`,
    position: new Vector3(6.6, y, backZ),
    scale: 2,
  },

  // left side
  {
    url: `${url}36.jpg`,
    position: new Vector3(leftSideX, y, -22.2),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}37.jpg`,
    position: new Vector3(leftSideX, y, -19.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}8.jpg`,
    position: new Vector3(leftSideX, y, -16.2),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}9.jpg`,
    position: new Vector3(leftSideX, y, -13.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}10.jpg`,
    position: new Vector3(leftSideX, y, -10.2),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}11.jpg`,
    position: new Vector3(leftSideX, y, -7.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}12.jpg`,
    position: new Vector3(leftSideX, y, -4.2),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}13.jpg`,
    position: new Vector3(leftSideX, y, -1.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}14.jpg`,
    position: new Vector3(leftSideX, y, 1.8),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}15.jpg`,
    position: new Vector3(leftSideX, y, 4.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },

  // top side
  {
    url: `${url}16.jpg`,
    position: new Vector3(-6.4, y, topZ),
    scale: 2,
  },
  {
    url: `${url}17.jpg`,
    position: new Vector3(-4, y, topZ),
    scale: 2,
  },
  {
    url: `${url}18.jpg`,
    position: new Vector3(4.2, y, topZ),
    scale: 2,
  },
  {
    url: `${url}19.jpg`,
    position: new Vector3(6.4, y, topZ),
    scale: 2,
  },

  // right side
  {
    url: `${url}38.jpg`,
    position: new Vector3(rightSideX, y, -22.2),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}39.jpg`,
    position: new Vector3(rightSideX, y, -19.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}20.jpg`,
    position: new Vector3(rightSideX, y, -16.2),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}21.jpg`,
    position: new Vector3(rightSideX, y, -13.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}22.jpg`,
    position: new Vector3(rightSideX, y, -10.2),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}23.jpg`,
    position: new Vector3(rightSideX, y, -7.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}24.jpg`,
    position: new Vector3(rightSideX, y, -4.2),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}25.jpg`,
    position: new Vector3(rightSideX, y, -1.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}26.jpg`,
    position: new Vector3(rightSideX, y, 1.8),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}27.jpg`,
    position: new Vector3(rightSideX, y, 4.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },

  // stand
  {
    url: `${url}28.jpg`,
    position: new Vector3(1.96, y, -0.3),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}29.jpg`,
    position: new Vector3(1.96, y, -2.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}30.jpg`,
    position: new Vector3(2.06, y, -0.3),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}31.jpg`,
    position: new Vector3(2.06, y, -2.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}32.jpg`,
    position: new Vector3(-1.96, y, -8.3),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}33.jpg`,
    position: new Vector3(-1.96, y, -10.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}34.jpg`,
    position: new Vector3(-2.06, y, -8.3),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}35.jpg`,
    position: new Vector3(-2.06, y, -10.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}40.jpg`,
    position: new Vector3(2.96, y, -16.3),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}41.jpg`,
    position: new Vector3(2.96, y, -18.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}42.jpg`,
    position: new Vector3(3.06, y, -16.3),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}43.jpg`,
    position: new Vector3(3.06, y, -18.5),
    rotation: new Vector3(0, -Math.PI / 2, 0),
    scale: 2,
  },
  {
    url: `${url}44.jpg`,
    position: new Vector3(-3.06, y, -17),
    rotation: new Vector3(0, Math.PI / 4, 0),
    scale: 2,
  },
  {
    url: `${url}45.jpg`,
    position: new Vector3(-2.96, y, -17),
    rotation: new Vector3(0, Math.PI / 4, 0),
    scale: 2,
  },
];