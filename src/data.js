import animalImg from './assets/animal1.jpg';
import birdImg from './assets/birds1.jpeg';
import forestImg from './assets/forest1.jpeg';
import petImg from './assets/pets1.jpg';

export const LIST_DATA = [
    {
        title: "Animals", 
        description: "The WildLife Sanctuary ",
        image: animalImg
    },
    {
        title: "Birds", 
        description: "The Bird Sanctuary ",
        image: birdImg
    },
    {
        title: "Forests", 
        description: "The WildLife Sanctuary ",
        image: forestImg
    },
    {
        title: "Pet Animals", 
        description: "The Cats and Dogs ",
        image: petImg
    }
];

export const descriptions = [`Nature's Web`, 'Green Web', 'The Hut of nature'];

export function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}