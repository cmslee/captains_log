const React = require('react');

function New () {
    return(
        <div>
            <h1>Create New Log</h1>
            <form action='/logs' method='POST'>
                <p>Title: <input type='text' name='title'/></p>
                <p>Entry: <input type='textarea' name='entry'/></p>
                <p>Is ship broken? <input type='checkbox' name='shipIsBroken'/></p>
                <p><input type='submit' value='log'/></p>
            </form>
        </div>
    )
}

module.exports = New;