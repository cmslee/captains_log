const React = require('react');

function Edit (props) {
    const {log} = props;
    return(
        <div>
            <h1>Edit Log</h1>
            <form action={`/logs/${log._id}?_method=PUT`} method='POST'>
                <p>Title: <input type='text' name='title' defaultValue={log.title}/></p>
                <p>Entry: <input type='textarea' name='entry' defaultValue={log.entry}/></p>
                <p>Is ship broken? {log.shipIsBroken?
                    <input type='checkbox' name='shipIsBroken' defaultChecked/>
                    :
                    <input type='checkbox' name='shipIsBroken'/>}</p>
                <p><input type='submit' value='Submit Edits'/></p>
            </form>
        </div>
    )
}

module.exports = Edit;