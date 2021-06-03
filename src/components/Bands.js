import React from 'react'
import Band from './Band'

// const renderBands = () => {
//     for (var band in props) {
//         <Band bandName={band.bandName} />
//     }
// }

const Bands = props => {
    // props.map(band => <Band bandName={band.bandName} />)

    // render() {
    //     return (
    //         <div>
    //             {this.renderBands()}
    //         </div>
    //     )
    // }

    return Object.entries(props).map(band => <Band bandName={band.bandName} />)
}

export default Bands