import React from 'react'
import { Link } from "react-router-dom";

const Maps = () => {
    // static defaultProps = {
    //     center: {
    //       lat: 59.95,
    //       lng: 30.33
    //     },
    //     zoom: 11
    //   };
    return (
        // Important! Always set the container height explicitly
        // <div style={{ height: '100vh', width: '100%' }}>
        //     <GoogleMapReact
        //     bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        //     defaultCenter={this.props.center}
        //     defaultZoom={this.props.zoom}
        //     >
        //     <AnyReactComponent
        //         lat={59.955413}
        //         lng={30.337844}
        //         text="My Marker"
        //     />
        //     </GoogleMapReact>
        // </div>

        // dummmy map
        <div class="mapouter">
            <div class="gmap_canvas">
                <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                <a href="https://2piratebay.org"></a>
                <br/>
            </div>
            <Link className="text-center" to="/">Back to main</Link>
        </div>
    )
}

export default Maps
