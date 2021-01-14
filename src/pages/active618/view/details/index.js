import React from 'react';
import { connect } from 'react-redux';
class Details extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                Details
            </div>
        )
    }

}

const mapState = (state) => ({
})
const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Details);
