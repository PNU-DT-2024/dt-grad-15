import React from "react";
import { useMediaQuery } from "react-responsive";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMap({width, height}) {
  const isMobile = useMediaQuery({
    query: "(max-width : 767px)"
  });
  return (
    <Map
      center={{ lat: 35.17402959698592, lng: 129.12938121809884 }} // 설정된 위도, 경도
      style={{ width: `${width}px`, height: `${height}px` }} // 크기
      level={3} // 줌 레벨 설정
    >
      <MapMarker
        position={{ lat: 35.17402959698592, lng: 129.12938121809884 }}
      ></MapMarker>
    </Map>
  );
}

export default KakaoMap;
