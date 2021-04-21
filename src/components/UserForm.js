import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import injectTapEventPlugin from "react-tap-event-plugin";


import FormUserDetail from "./FormUserDetail";
import FormPersonalDetail from "./FormPersonalDetail";
//injectTapEventPlugin();




export class UserForm extends Component {
   state = {
       data:[]
   };
    render(){
      
     
              
             return (
                <MuiThemeProvider>
                <div className="App">
                  <FormUserDetail
                  onSubmit={submission =>
                    this.setState({
                      data: [...this.state.data, submission]
                    })
                  
                  } />

                  <FormPersonalDetail
                  data={this.state.data}
                  header={[
                      {
                          name: "Firstname",
                          prop: "firstname"
                  },
                  {
                    name: "Lastname",
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
            
               
                  
                  
                  
                  
                  
                 
        
      
            )
      
       

    }
}

export default UserForm;