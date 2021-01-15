import React from 'react';
import { connect } from 'react-redux';
import Label from '../../components/label';
class Details extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <div>
                Details
                <Label></Label>
            </div>
        )
    }

}

const mapState = (state) => ({
})
const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Details);
