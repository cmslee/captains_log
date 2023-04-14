const React = require('react');

function New () {
    return(
        <div>
            <form action='/logs' method='POST'>
                Title: <input type='text' name='title'/><br/>
                Entry: <input type='textarea' name='entry'/><br/>
                Is ship broken? <input type='checkbox' name='shipIsBroken'/><br/>
                <input type='submit' value='add ship'/>
            </form>
        </div>
    )
}

module.exports = New;