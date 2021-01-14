import React from 'react';
import { connect } from 'react-redux';
class Login extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                Login
            </div>
        )
    }

}

const mapState = (state) => ({
})
const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Login);
