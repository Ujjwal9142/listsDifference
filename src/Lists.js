import React, { useState } from 'react';
import './Lists.css';

const Lists = () => {

    // States 
    const [firstList, setFirstList] = useState([]);
    const [secondList, setSecondList] = useState([]);
    const [currentInput1, setCurrentInput1] = useState("");
    const [currentInput2, setCurrentInput2] = useState("");
    const [isComputed, setIsComputed] = useState(false);
    const [commonElements, setCommonElements] = useState([]);
    const [onlyInList1, setOnlyInList1] = useState([]);
    const [onlyInList2, setOnlyInList2] = useState([]);

    // Functions
    const addToList1 = () => {
        if(currentInput1){
            setFirstList([...firstList, currentInput1]);
            setCurrentInput1("");
        }
        else{
            alert("Please enter a valid value!");
        }  
    }

    const addToList2 = () => {
        if(currentInput2){
            setSecondList([...secondList, currentInput2]);
            setCurrentInput2("");
        }
        else{
            alert("Please enter a valid value!");
        }
    }

    const handleCompute = () => {
        if(firstList.length === 0 && secondList.length === 0){
            alert('Please enter some values in the Lists!');
        }
        else if(firstList.length !== 0 && secondList.length === 0){
            alert('Second List is Empty!');
        }
        else if(firstList.length === 0 && secondList.length !== 0){
            alert('First List is Empty!');
        }
        else{
            for(let i=0; i<firstList.length; i++){
                let flag = 0;
                for(let j=0; j<secondList.length; j++){
                    if(firstList[i] === secondList[j]){
                        commonElements.push(firstList[i]);
                        flag = 1;
                    }     
                }
                if(flag === 0){
                    onlyInList1.push(firstList[i]);
                }
            }
            for(let i=0; i<secondList.length; i++){
                let flag = 0;
                for(let j=0; j<commonElements.length; j++){
                    if(secondList[i] === commonElements[j]){
                        flag = 1;
                    }     
                }
                if(flag === 0){
                    onlyInList2.push(secondList[i]);
                }
            }
            setIsComputed(true);
        }
    }
    
    // Display Variables
    const showFirstList = firstList?.map((val) => {
        return <div>
            {val}
        </div>   
    });

    const showSecondList = secondList?.map((val) => {
        return <div>
            {val}
        </div>   
    });

    const showOnlyInList1 = onlyInList1.map((value) => {
        return (
            <div>
                {value}
            </div>
        )
    });

    const showOnlyInList2 = onlyInList2.map((value) => {
        return (
            <div>
                {value}
            </div>
        )
    });

    const showCommonList = commonElements.map((value) => {
        return (
            <div>
                {value}
            </div>
        )
    });

    return (
        <div className="lists_main">
            <div className="main_header">
                <h1>The App that tells you the difference between Lists!</h1>
            </div>
            <div className="add_list1">
                <h5>Add elements to List A:</h5>
                <input type="text" disabled={isComputed} value={currentInput1} onChange={(event) => setCurrentInput1(event.target.value)}></input>
                <button onClick={addToList1} disabled={isComputed}>Add</button>
            </div>
            <div className="add_list2">
                <h5>Add elements to List B:</h5>
                <input type="text" disabled={isComputed} value={currentInput2} onChange={(event) => setCurrentInput2(event.target.value)}></input>
                <button onClick={addToList2} disabled={isComputed}>Add</button>
            </div>
            <div className="show_lists">
                <div className="show_list1">
                    <h5>Elements given in List A are: {showFirstList}</h5>
                </div>
                <div className="show_list2">
                    <h5>Elements given in List B are: {showSecondList}</h5>
                </div>
            </div>
            <button className="compute_butn" onClick={handleCompute} disabled={isComputed}>Compute</button>
            {
                isComputed ? 
                <div className="show_differences">
                    <div className="show_onlyList1">
                        <h5>Elements only in List A are: {showOnlyInList1}</h5>
                    </div>
                    <div className="show_onlyList2">
                        <h5>Elements only in List B are: {showOnlyInList2}</h5>
                    </div>
                    <div className="show_commonList">
                        <h5>Elements common in both lists are: {showCommonList}</h5>
                    </div>
                    <div className="show_uniqueList">
                        <h5>Unique elements in both lists are: {showOnlyInList1}{showOnlyInList2}{showCommonList}</h5>
                    </div>
                </div> : <h5 className="initial_text">Click compute to know the differences!</h5>
            }   
        </div>
    );
};

export default Lists;