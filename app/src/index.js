import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
  
class Overview extends React.Component {
    render() {
        return (
        <div>
            <div>
                Hello World :)
            </div>
        </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Overview />,
    document.getElementById('root')
);
  