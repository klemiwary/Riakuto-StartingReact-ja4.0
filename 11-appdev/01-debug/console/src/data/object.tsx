interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const todo: ToDo = {
  userId: 1,
  id: 10,
  title: 'illo est ratione doloremque quia maiores aut',
  completed: true,
};

const reactElem = (
  <ul>
    <li>ONE</li>
    <li>TWO</li>
  </ul>
);

const domElem = document.createElement('ul');
const liFirst = document.createElement('li');
liFirst.textContent = `ONE`;
const liSecond = document.createElement('li');
liSecond.textContent = `TWO`;
domElem.appendChild(liFirst);
domElem.appendChild(liSecond);

export { todo, reactElem, domElem };
export type { ToDo };
