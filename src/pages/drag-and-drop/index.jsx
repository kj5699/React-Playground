import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@/Components/Base/Button';
import Layout from '@/Components/HOC/Layout';

const intitalTtems = [
    {id :0,  text: 'First Text', completed : false},
    {id :1,  text: 'Second Text', completed : false},
    {id :2,  text: 'Third Text', completed : false},
    {id :3,  text: 'Fourth Text',completed : false},
    {id :4,  text: 'Fifth Text',completed : false }
]


const ToDoList = () => {
    const [items, setItems] = useState(intitalTtems);
    const [current, setCurrent] = useState(null);
    const dragOverIndex = useRef(null);
    const inputRef = useRef();
    const AddToList = () => {
        if(inputRef.current?.value && inputRef.current?.value!== null){
            let value = inputRef.current.value
            setItems(prev => [...prev, {id: prev.length, text: value} ]);
            inputRef.current.value = null;
        }
    };
    const dragStart = (e, index) => {
      console.log("Dragging", index);
      setCurrent(index);
    };
    const dragOver = (e, index) => {
      console.log('Drag Over', index)
      e.preventDefault();
      dragOverIndex.current = index;
    };
  
    const drop = (e, index) => {
      let updatedItems = [...items];
      const currentItem = updatedItems[current];
      updatedItems.splice(current, 1);
      console.log('CDE',dragOverIndex.current);
      updatedItems.splice(dragOverIndex.current, 0, currentItem);
      setCurrent(null);
      dragOverIndex.current = null;
      setItems(updatedItems);
    };
    console.log('Dragover Index' , dragOverIndex.current);
    return (
        <Layout headingText={'To-Do List / Drag Drop Component'}>
        <div className='flex justify-between h-full w-full py-8'>
        <div className={`${styles.inputSection}  w-1/2 flex flex-col  items-center`}>
            <input ref = {inputRef}  placeholder='Ex : Do laundry' className='w-52 h-12 py-2 px-4 mb-4 rounded'/>
            <Button label={'Add Task'} onClick={AddToList} buttonClass={'w-52'}/>
        </div>
        <div className={styles.itemList}>
          {items.map((item, index) => (
            <div
              key = {index}
              className={`${styles.item} ${dragOverIndex.current === index ? styles.item__focused : null }`}
              draggable
              onDragStart={(e) => dragStart(e, index)}
              onDragOver={(e) => dragOver(e, index)}
              onDragEnter={(e) => dragOver(e, index)}
              onDrop={drop}
            >
              c
              
              <div className='w-full text-center'> {item.text}</div>
              <div className={`flex items-center`}> 
                <Button label={item.completed ?"Reset":'Done'} onClick = {null} buttonClass={'w-full mr-3 px-2 mb-0'}/>
                <Button label={'Remove'} onClick = {null} buttonClass={'w-full  px-2 mb-0'}/>
              </div>
            </div>
          ))}
        </div>
        </div>
        </Layout>
      
    );
}

export default ToDoList