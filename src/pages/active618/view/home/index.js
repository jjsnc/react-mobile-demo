import React from 'react';
import { connect } from 'react-redux';
import "./index.less";
class Home extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="test">Home</div>
        )
    }

}

const mapState = (state) => ({
})
const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(Home);
