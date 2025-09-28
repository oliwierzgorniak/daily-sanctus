const images = [
  require("../../data/images/icons/0.jpg"),
  require("../../data/images/icons/1.jpg"),
  require("../../data/images/icons/2.jpg"),
  require("../../data/images/icons/3.jpg"),
  require("../../data/images/icons/4.jpg"),
  require("../../data/images/icons/5.jpg"),
  require("../../data/images/icons/6.jpg"),
  require("../../data/images/icons/7.jpg"),
  require("../../data/images/icons/8.jpg"),
];

const getIconImage = (id: number) => {
  return images[id];
};

export default getIconImage;
