import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import injectTapEventPlugin from "react-tap-event-plugin";


import FormUserDetail from "./components/FormUserDetail";
import FormPersonalDetail from "./components/FormPersonalDetail";



class App extends Component {
  state = {
    data:[],
    editIdx: -1
};

handleDelete = (i) =>{
  this.setState(state=>({
    data:state.data.filter((x,j) => j !== i) 
  }))
}

handleEdit = (i) =>{
  this.setState({
    editIdx: i
  })

}

stopEditing = () =>{
  this.setState({
    editIdx: -1
  })

}

handleChange = (e,name,i) => {
  const {value} = e.target;
  this.setState(state=>({
    data:state.data.map((row, j) => (j === i ? {...row, [name]: value} : row
      ))
  }))
}
 render(){
   
  
           
          return (
             <MuiThemeProvider>
             <div className="App">
               <FormUserDetail
               onSubmit={submission =>
                
                this.setState({
                   data: [...this.state.data, submission]
                 
                  })
                
                
                
                
                }/>

               <FormPersonalDetail
               handleDelete={this.handleDelete}
               handleEdit={this.handleEdit}
               editIdx={this.state.editIdx}
               stopEditing={this.stopEditing}
               handleChange={this.handleChange}
              // editIdx,handleChange,
              // stopEditing,
               data={this.state.data}
              
               header={[
                   {
                       name: "Firstname",
                       prop: "firstname"
               },
               {
                 name: "lastname",
                 prop: "lastname"
         },
         {
             name: "Email",
             prop: "email"
     },
     {
         name: "Occupation",
         prop: "occupation"
 },
 {
     name: "City",
     prop: "city"
},
{
 name: "Bio",
 prop: "bio"
}

 
 

             
             
             ]}
                />
               
                </div>
                </MuiThemeProvider>
              
         
            
               
               
 





 
    

    );
     
               
  }


}

export default App;
