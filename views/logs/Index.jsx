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
                    <li key={log._id} className='logs'>
                        <a href={`/logs/${log._id}`}>Title: {log.title} |</a>
                        <a href={`/logs/${log._id}/edit`}> (Edit)</a>
                        <form method='POST' action={`/logs/${log._id}?_method=DELETE`}>
                            <input type='submit' value='delete'/>
                        </form>
                    </li>
                )
            })}   
         </ul>  
        </div>
    )
}

module.exports = Index;