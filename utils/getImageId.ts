const images = [
  require("../assets/images/saints/0.jpg"),
  require("../assets/images/saints/1.jpg"),
  require("../assets/images/saints/2.jpg"),
  require("../assets/images/saints/3.jpg"),
  require("../assets/images/saints/4.jpg"),
  require("../assets/images/saints/5.jpg"),
  require("../assets/images/saints/6.jpg"),
  require("../assets/images/saints/7.jpg"),
  require("../assets/images/saints/8.jpg"),
];

const getImageId = (id: number) => {
  return images[id];
};

export default getImageId;
