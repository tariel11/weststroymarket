import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";

const MyMap = () => (
    <YMaps>
        <div>
            <Map
                width={"100%"}
                defaultState={{ center: [55.791638, 37.748224], zoom: 15 }}
            >
                <Placemark geometry={[55.791638, 37.748224]} />

                <ZoomControl options={{ float: "left" }} />
            </Map>
        </div>
    </YMaps>
);

export default MyMap;
