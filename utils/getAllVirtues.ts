// https://joelolawanle.com/blog/how-to-create-an-array-of-unique-values-in-javascript
import saints from "../data/saints/content.json";

const getAllVirtues = () => {
  const allVirtues: string[] = [];

  saints.forEach(({ virtues }) => allVirtues.push(...virtues));
  const uniqueVirtues = allVirtues.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  return uniqueVirtues;
};

export default getAllVirtues;
