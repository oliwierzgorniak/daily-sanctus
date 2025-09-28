const images = [
  require("../../data/images/shareables/0.jpg"),
  require("../../data/images/shareables/1.jpg"),
  require("../../data/images/shareables/2.jpg"),
  require("../../data/images/shareables/3.jpg"),
  require("../../data/images/shareables/4.jpg"),
  require("../../data/images/shareables/5.jpg"),
  require("../../data/images/shareables/6.jpg"),
  require("../../data/images/shareables/7.jpg"),
  require("../../data/images/shareables/8.jpg"),
];

const getShareableImage = (id: number) => {
  return images[id];
};

export default getShareableImage;
