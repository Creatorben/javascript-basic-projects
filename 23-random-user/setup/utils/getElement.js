const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error('Kein Element gewählt');
};

export default getElement;
