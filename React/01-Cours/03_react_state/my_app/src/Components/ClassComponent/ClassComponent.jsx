import React from 'react';

 class ClassComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        //on intègre toutes les variables nécessaires dans this.state
        this.state = {
            myText: "",
            myAge: 10
        }
    }
    //componentDidMount se déclanche au lancement de l'application
    componentDidMount(){
        console.log("componentDidMount");
    }

// declenche une fonction à chaque mise à jour de la page
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    // se declenche à chaque erreur
    componentDidCatch() {
        console.log("componentDidCatch");
    }

    render() { 
        return (
            <div>
                <h1>ClassComponent</h1>
                <p>myText: <i>{this.state.myText}</i></p>
                <p>myAge: <i>{this.state.myAge}</i> ans</p>
                <hr />
                <div>
                    <label htmlFor="myText">myText : </label>  
                    <input type="text" id="myText" onChange={(e) => this.setState({myText: e.target.value})} /> 
                </div>
                <div>
                    <label htmlFor="myAge">myAge : </label>  
                    <input type="number" id="myAge" onChange={(e) => this.setState({myAge: +e.target.value})} /> 
                </div>           
            </div>
        );
    }
 }
// le + devant (e) signifie que la cible sera un number
 export default ClassComponent;