import React from "react";

const InputForm = () => {
  return (
    <div>
      <div>
          <h2>{this.state.title}</h2> //creates title for new task
        <div>
          {/* <ToDoList list={this.state.list} /> */}
          <input
            
          />
          <button onClick={this.handleButtonClick}>Add this task</button>
        </div>
      </div>
      <InputForm>Input form appears here.</InputForm>
    </div>
  );
};

export default InputForm;
