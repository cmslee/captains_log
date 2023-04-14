const React = require('react');

function Show (props) {
    const {log} = props;
    return(
        <div>
            <p>Title: {log.title}</p>
            <p>Entry: {log.entry}</p>
            <p></p>
            <a href='/logs'>Back to Index</a>
        </div>
    )
}

module.exports = Show;