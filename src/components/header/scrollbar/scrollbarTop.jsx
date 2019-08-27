import React, {Component} from 'react';


window.onscroll = function () {
    myFunction()
};
function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = ( winScroll / height ) * 100;
    if (document.getElementById( "scrollbar" )) {
        document.getElementById( "scrollbar" ).style.width = scrolled + "%";
    }
}


class ScrollbarTop extends Component {
    render() {
        const show = this.props.show;

        return (
            <React.Fragment>
                { show ?
                    <div className='progressContainer'>
                        <div id="scrollbar" className='progressBar' />
                    </div>

                    : null }
            </React.Fragment>
        )
    }
}

export default ScrollbarTop;
