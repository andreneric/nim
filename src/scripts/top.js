// Import React
import React from 'react';
var hej = "hejs",
    name = "Daniel Lauding",
    type = "Guldkund 15% rabatt";

var toggleUser = function(e) {
    var that = e.target;
    if(that === document.getElementById('m-icon')){
        document.getElementById('m-inner').style.display = "block";
        document.getElementById('u-inner').style.display = "none";
    }else {
        document.getElementById('u-inner').style.display = "block"
        document.getElementById('m-inner').style.display = "none";
    }
}
// Header
export default class Top extends React.Component {
    render() {
        return (
        	<div id="top">
        		<div className="left">
        			<p>{hej}</p>
        		</div>
        		<div className="right">
                    <div className="search">
                        <input type="text" placeholder="Sök på mina länsförsäkringar" />
                    </div>
                    <div className="messages">
                        <span id="m-icon" onClick={toggleUser}></span>
                        <div id="m-inner">
                            Meddelanden
                        </div>
                    </div>
                    <div id="user" onClick={toggleUser}>
                        <span className="avatar"></span>
                        <div className="info">
                            <p className="name">{name}</p>
                            <p className="type">{type}</p>
                        </div>
                        <div id="u-inner">
                            Information
                        </div>
                    </div>
                    <div className="sign-in">
        			     <button>Logga in</button>
                    </div>
        		</div>
        	</div>
        );
    }
}

