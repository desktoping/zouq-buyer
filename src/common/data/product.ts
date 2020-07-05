const productObj = {
  id: 12,
  name: 'Product Name',
  labels: ['Fruit', 'Fresh'],
  type: 1,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus leo. Pellentesque eget ipsum luctus, faucibus felis at, interdum sem. Integer luctus, libero sed cursus vulputate, velit ligula imperdiet turpis, in viverra tellus massa vel enim. Nunc feugiat leo et lacus fringilla, ut ullamcorper nisl porta. Curabitur elit purus, feugiat id sapien eu, tincidunt pulvinar magna.',
  price: 123,
  fee: 123,
  thumbnail: 'https://picsum.photos/200/200',
};

const getRandom = () => Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

export const generateProductData = (length: number) =>
  Array.from({ length })
    .fill(1)
    .map(() => ({
      ...productObj,
      id: getRandom(),
      price: getRandom(),
      fee: getRandom(),
    }));
