export const randomPick = <T>(list: T[], amount = 1): T[] => {
  const cloneList = [...list];
  const pickedList = [];

  while (pickedList.length < amount && cloneList.length > 0) {
    const index = Math.floor(Math.random() * cloneList.length);
    pickedList.push(cloneList[index]);
    cloneList.splice(index, 1);
  }

  return pickedList;
};
