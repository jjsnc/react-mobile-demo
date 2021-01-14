import React from 'react';
import { connect } from 'react-redux';
class Register extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                Register
            </div>
        )
    }

}

const mapState = (state) => ({
})
const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Register);
