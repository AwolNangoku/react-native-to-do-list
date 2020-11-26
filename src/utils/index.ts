/**
 * Generates a random id between A0 and Aseed
 */
const generateItemID = (seed: number = 10000000) =>
  `A${Math.floor(Math.random() * Math.floor(seed))}`;

export {generateItemID};
