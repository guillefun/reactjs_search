import React,{Component} from 'react';

class SimpleFooter extends Component{
   
    render(){
        let variable=<p>@Uniovi</p>;
        
        return (
            <React.Fragment>
            <footer class="footer navbar-fixed-bottom">
                <p>Source :  
                    <a href="https://github.com/uo264207/reactjs_search"> Repository</a>
                    {variable}
                </p>
            </footer>
            </React.Fragment>
            
        );
    }
}


export default SimpleFooter;