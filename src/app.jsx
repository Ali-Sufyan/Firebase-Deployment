import React, { Component } from 'react'
import {BsFillArrowUpCircleFill,BsFillArrowDownCircleFill } from "react-icons/bs";
import {BiEditAlt} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"




export default class app extends Component {
    state={
        inp_val:"",
        store_Data:[],
        data_index:"",
        swapButton:1
    }
    valueHandle=(e)=>{
        
        this.setState({inp_val:e.target.value})
    }

    // -------------------- Store the Value State Method ---------------------------


    valueSubmit=(e)=>{
        this.setState({store_Data:[...this.state.store_Data,this.state.inp_val]})
        this.setState({inp_val:""})
   
    }

    // --------------------End  Handle Store the Value State Method ---------------------------


// -------------------- Handle Shift Up ---------------------------

    handleUp=(index)=>{
        if(index===0)
{
    alert("already at the top")
}
else
{
    // console.log(this.state.store_Data[index],"array");
    const temp=this.state.store_Data;
    const swap=temp[index]
    temp[index]=temp[index-1];
    temp[index-1]=swap;
    this.setState([...temp])

    //   ==============second way==============

    // const temp=this.state.store_Data[index]
    // this.state.store_Data[index]=this.state.store_Data[index-1];
    // this.state.store_Data[index-1]=temp;
    // this.setState([...this.state.store_Data])



}

    }

    // -------------------- Handle Shift Up ---------------------------

// -------------------- Handle Shift Down ---------------------------

    handleDown=(index)=>{
         if(index === this.state.store_Data.length-1)
{
    alert("already at the bottom")
}
else
{
    const temp=this.state.store_Data;
    const swap=temp[index]
    temp[index]=temp[index+1];
    temp[index+1]=swap;
    this.setState([...temp])
}
    }

    // --------------------End  Handle Shift Down ---------------------------

    // ===================Handle delete Item ======================

handleDelete=(index)=>{


    // =======1st way ==========

// console.log(index,"working");
// const newArr=this.state.store_Data;
// newArr.splice(index,1)
// this.setState({store_Data:newArr})

// ================2nd way============

this.state.store_Data.splice(index,1)
this.setState({store_Data:this.state.store_Data})

}



// ==============Handle delete 1 Value End =============


// ==================Edit handle Event====================

handleEdit=(index)=>{

this.setState({data_index:index})
this.setState({inp_val:this.state.store_Data[index]})
this.setState({swapButton:0})
// this.handleUpdate(index);

}
handleUpdate=()=>{
    // this.setState({store_Data:[this.state.store_Data[this.state.data_index],this.state.inp_val]})
const newarrdata=this.state.store_Data;
newarrdata[this.state.data_index]=this.state.inp_val;
this.setState({store_Data:newarrdata})
this.setState({swapButton:1})
this.setState({inp_val:""})


    
}





  render() {
console.log(this.state.data_index,"click edit index");
    return (
      <>
      <h1 className='text-center lg:text-[2rem] sm:text-[1.5rem] md:text-[1.75rem] pt-4'>Todo_List With Class Component</h1>
      <div className='mx-auto w-[70%] md:w-[50%] mt-5 flex justify-evenly'>
      <input type="text" onChange={this.valueHandle} value={this.state.inp_val} className="w-[70%]  bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the Value" required />
         
         { this.state.swapButton === 1 && <button onClick={this.valueSubmit} className="ml-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Add
</button>
  }
{ this.state.swapButton ===0 && <button onClick={this.handleUpdate} className="ml-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Update
</button>
  }
  
        
      </div>
      <table className="mx-auto md:w-[70%] sm:w-[80%] w-[80%] mt-8 border-4 border-dashed border-indigo-600 ">
  <thead>
    <tr className='border-spacing-0.5'>
      <th className="w-[25%]">No#</th>
      <th className="w-[50%]">Data</th>
      <th className="w-[25%]">Operation</th>
    </tr>
  </thead>
  


 {this.state.store_Data.map((ele, index) => {
   return(
    <tbody>
    <tr key={index} className=" text-center">
      <td  className="w-[25%]">{index}</td>
      <td  className="w-[50%]">{ele}</td>
      <td className='text-2xl flex w-[25%] border-none pl-7'>
      <button onClick={()=>{this.handleUp(index)}} className="ml-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1  px-2 ">{<BsFillArrowUpCircleFill/> }</button>
      <button onClick={()=>{this.handleDown(index)}} className="ml-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1  px-2">{<BsFillArrowDownCircleFill/>}</button>
      <button onClick={()=>{this.handleEdit(index)}} className="ml-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1  px-2  ">{<BiEditAlt/>}</button>
      <button onClick={()=>{this.handleDelete(index)}} className="ml-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-1  px-2 ">{<AiFillDelete/>}</button>

      </td>
    </tr>
    </tbody>
   )
   
})
  } 

  
  
</table>
      </>
    )
  }
}
