import React from 'react';
// import Members from './Members/Members.jsx';
// import {createBrowserHistory} from 'history';
// import {BrowserRouter,Route} from 'react-router-dom';
// import Root from './Members/Root.jsx';
//  // import ShowMembers from './Members/ShowMembers.jsx';
//  import Addnewmember from './Members/Addnewmeber.jsx';
//import AddMembers from './Members/AddMembers.jsx'
// import {connect} from 'react-redux';
// import Addtodo from './components/Todolist/Addtodo.jsx';
// import Todolist from './components/Todolist/Todolist.jsx';
// import {Todoactions} from './actions/Todoactions/Todoactions.js';


// class App extends React.Component {
//    render() {
//     const { dispatch, visibleTodos } = this.props

//       return (
//          <div>
//            <Addtodo addTodo={(text)=>dispatch(Todoactions(text))}/>
//            <Todolist todos = {visibleTodos}/>
//          </div>
//       );
//    }
// }

// function select(state) {
//   console.log(state.todos);
//   return {
   
//      visibleTodos: state.todos
//   }
// }

// export default connect(select)(App)





class App extends React.Component {
    constructor(props)
    {
        super();
        this.editdata=this.editdata.bind(this);
        this.textonChange=this.textonChange.bind(this);
        this.savedata=this.savedata.bind(this);
        this.state={
            isVisible:true,
            textString:'',
            edittext:'data'
        }
    }
    editdata()
    {
        this.setState({
            isVisible:false
        })
    }
    textonChange(e)
    {
        this.setState({
            textString:e.target.value
        })
    }
    savedata()
    {
        this.setState({
            edittext:this.state.textString,
            isVisible:true
        })
    }
    render() {
        if(this.state.isVisible){
            return (   
                <div className="Main-container" style={{backgroundColor:'red'}}>
                    <div className="text">
                        {this.state.edittext}
                    </div>
                    <div>
                        <button onClick={this.editdata}>Click to edit</button>
                    </div>
                </div>
              );
        }
        else{
            return (   
                <div className="Main-container" style={{backgroundColor:'red'}}>
                    <div className="text">
                        <input type="text" onChange={this.textonChange}/>
                    </div>
                    <div>
                        <button onClick={this.savedata}>Click to save</button>
                    </div>
                </div>
              );
        }
         
       }
    }

export default App;