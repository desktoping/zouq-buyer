const basicStreamObj = {
  id: 15,
  live: true,
  views: '100',
  thumbnail: 'https://picsum.photos/1000/800',
  title: 'Stream title',
  seller: 'Streamer',
};

const premiumStreamObj = {
  id: 16,
  live: false,
  views: '24K',
  thumbnail: 'https://picsum.photos/1000/800',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus leo. Pellentesque eget ipsum luctus, faucibus felis at, interdum sem. Integer luctus, libero sed cursus vulputate, velit ligula imperdiet turpis, in viverra tellus massa vel enim. Nunc feugiat leo et lacus fringilla, ut ullamcorper nisl porta. Curabitur elit purus, feugiat id sapien eu, tincidunt pulvinar magna.',
  title: 'Stream title 2',
  seller: 'Streamer 2',
};

const getRandom = () => Math.floor(Math.random() * (10000 - 1 + 1)) + 1;

export const generateStreamData = (length: number) =>
  Array.from({ length })
    .fill(1)
    .map(() => ({
      ...basicStreamObj,
      id: getRandom(),
      views: getRandom(),
    }));

export const generatePremiumStreamData = (length: number) =>
  Array.from({ length })
    .fill(1)
    .map(() => ({
      ...premiumStreamObj,
      id: getRandom(),
      views: getRandom(),
    }));
