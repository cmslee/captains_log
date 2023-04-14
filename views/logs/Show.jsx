const React = require('react');

function Show (props) {
    const {log} = props;
    return(
        <div>
            <p>Title: {log.title}</p>
            <p>Entry: {log.entry}</p>
            <p>Ship Status: 
                {log.shipIsBroken
                    ? 'Damages. See to repairs.'
                    : 'Sweet and sound. Smooth sailing.'
                }
            </p>
            <a href='/logs'>Back to Index</a>
        </div>
    )
}

module.exports = Show;