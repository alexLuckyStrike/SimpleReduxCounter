    import React, {Component} from 'react';
    import ReactDOM from 'react-dom';
    import {render} from 'react-dom';
    import css from './App.css';
    import {connect} from 'react-redux';

    class App extends Component{

    updateCounter(value){
         // this.setState({
         //     counter: this.state.counter + value
         // })
    }

    render(){
         //console.log(this.props)
        return(
            <div className="App">
            <h1>Счетчик:<span>{this.props.counter}</span></h1>
                <div>
                    <button onClick={this.props.onAdd}>Add</button>
                    <button onClick={this.props.onSub}>Minus</button>
                </div>
            </div>
        )
    }
}

    function mapStateToProps(state){
        return{
            counter:state.counter
        }
    }

    function mapDispatchToProps(dispatch){
        return{
            onAdd:() => dispatch({type:'ADD'}),
            onSub:() => dispatch({type:'SUB'})
        }
    }


    export default connect(mapStateToProps,mapDispatchToProps)(App);