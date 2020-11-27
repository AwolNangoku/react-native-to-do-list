/**
 * Generates a random id between A0 and Aseed
 */
import {Todo} from '../services/appState/todosList/types';

const generateItemID = (seed: number = 10000000) =>
  `A${Math.floor(Math.random() * Math.floor(seed))}`;

/**
 * Convert list items to text message for sharing
 */

const sharingContent = (todoItems: Todo[]) => {
  let shareContent = 'Todo items as follows:\n';
  todoItems.forEach((todoItem) => {
    shareContent =
      shareContent +
      `Name: \n${todoItem.name}\nDescription: ${
        todoItem.description
      }\nStatus: ${todoItem.isDone ? 'Completed' : 'Not done'}\n\n`;
  });
  return shareContent;
};

export {generateItemID, sharingContent};
