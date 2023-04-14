const React = require('react');

function Index (props) {
    const {logs} = props;
    return(
        <div>
          <h1>Log Index</h1>
        
          <nav>
            <a href='/logs/new'>Create New Log</a>
          </nav>

          <ul>
            {logs.map((log) => {
                return(
                    <li key={log._id}>
                        <p>Title: {log.title}</p>
                        {/* <p>Entry: </p>
                        <p>Ship Status: </p>
                        <p>--------------------------------</p> */}
                    </li>
                )
            })}   
         </ul>  
        </div>
    )
}

module.exports = Index;