import { apiUrl } from '../../global';
import react, { PureComponent } from 'react';
import { ActivityIndicator } from 'react-native';

export default class SpotMarkerList extends PureComponent {

    state = {
        spotMarkerList: [],
        loading: true,
    }

    async componentDidMount() {
        try {
            const apiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const spotData = await apiCall.json();
            this.setState({spotMarkerList: spotData._embedded.spots, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }

    getMarkerList () {
        const { spotMarkerList, loading } = this.state;
        const markerList = [];
        if (!loading) {
            for (let i = 0; i < spotMarkerList.length; i++) {
                let latlng = {
                    latitude: spotMarkerList[i].latitude,
                    longitude: spotMarkerList[i].longitude,
                };
                markerList.push(
                    <Marker 
                        key={spotMarkerList[i].id}
                        coordinate={latlng}
                        title={spotMarkerList[i].name}
                        description={spotMarkerList[i].description}
                    />
                );
            }
            return markerList;
        }
    }
}