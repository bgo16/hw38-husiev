import { useState } from 'react';

export function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { text: inputValue, isGreen: false }]);
      setInputValue('');
    }
  };

  const toggleColor = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isGreen = !updatedItems[index].isGreen;
    setItems(updatedItems);
  };

  return (
    <>
      <h1>Todo-list:</h1>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleColor(index)}
            style={{
              color: item.isGreen ? 'green' : 'red'
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div>
        <input type='text' value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddItem}>Add to list</button>
      </div>
    </>
  );
}
