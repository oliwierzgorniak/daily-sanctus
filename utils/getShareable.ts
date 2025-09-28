const images = [
  require("../assets/images/saints/shareables/0.jpg"),
  require("../assets/images/saints/shareables/1.jpg"),
  require("../assets/images/saints/shareables/2.jpg"),
  require("../assets/images/saints/shareables/3.jpg"),
  require("../assets/images/saints/shareables/4.jpg"),
  require("../assets/images/saints/shareables/5.jpg"),
  require("../assets/images/saints/shareables/6.jpg"),
  require("../assets/images/saints/shareables/7.jpg"),
  require("../assets/images/saints/shareables/8.jpg"),
];

const getShareableId = (id: number) => {
  return images[id];
};

export default getShareableId;
