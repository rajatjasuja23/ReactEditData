import React from 'react';
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
