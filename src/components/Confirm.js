import React,{Component} from 'react';
//import Dialog from '@material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';




export class Confirm extends Component {

continue = e =>{
    e.preventDefault();
    this.props.nextStep();
}
back = e => {
    e.preventDefault();
    this.props.prevStep();
}
    render(){
        const {values:{lastname,firstname,email,occupation,city,bio}} = this.props;
        return(
           <MuiThemeProvider>
           <React.Fragment>
           <AppBar title='Confirm User Data' />
            <List>
            <ListItem
            primaryText="Lastname"
            secondaryText={lastname}/>
            <ListItem
            primaryText="Firstname"
            secondaryText={firstname}/>
            <ListItem
            primaryText="Email"
            secondaryText={email}/>
            <ListItem
            primaryText="Occupation"
            secondaryText={occupation}/>
            <ListItem
            primaryText="City"
            secondaryText={city}/>
            <ListItem
            primaryText="Bio"
            secondaryText={bio}/>
            
            
            
            </List>


           <RaisedButton
           label='Confirm'
           primary={true}
           style={styles.button}
           onClick={this.continue} >
           </RaisedButton>

           <RaisedButton
           label='back'
           primary={true}
           style={styles.button}
           onClick={this.back} >
           </RaisedButton>



           
           
           
           </React.Fragment>
           
           
           
           
           </MuiThemeProvider>

        )
    }
}

const styles = {
    button:{
        margin: 15
    }
}

export default Confirm;