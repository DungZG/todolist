import './App.css';
import TodoList from './components/TodoList'
import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/primitives/pressable'
import { useCallback, useState } from 'react';
import { v4 } from 'uuid'
function App() {
  const [todolist, settodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback((e) => {
    settodoList([...todolist, 
      { id: v4(), name: textInput, isComplete: false }]);
      setTextInput("");
  },
  [textInput, todolist]
);


  return (
    <>
      <h3>Todo List</h3>
      <Textfield name="addList" placeholder='thêm việc làm  ... ' elemAfterInput={
        <Button isDisabled={!textInput} appearance='primary' onClick={onAddBtnClick}>
          Thêm
        </Button>
      }
        css={{ padding: '2px 4px 2px' }}
        value={textInput}
        onTextInputChange={onTextInputChange}
      ></Textfield>
      <TodoList />
    </>
  );
}

export default App;
