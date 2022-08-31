import React, { useEffect, useState } from "react";

export default function DeviceSummary(props) {

    const [id, setId] = useState();
    const [deviceInfo, setDeviceInfo] = useState();
    const [render, setrender] = useState(false);

    useEffect(() => {
        setId(props.count);
        console.log('idid', id);
        if (sessionStorage.getItem("deviceGlobal" + id) !== null) {
            setDeviceInfo(JSON.parse(sessionStorage.getItem("deviceGlobal" + id)));
            console.log('çalıştım', deviceInfo);
        }
    }, []);

    useEffect(() => {
        if (sessionStorage.getItem("deviceGlobal" + props.count) !== null) {
            setrender(true);
            console.log('props', props);
        }
    }, [sessionStorage]);
    return (
        <>
            {
                render ? (
                    <div>{deviceInfo?.color ? deviceInfo.color : 'sebooa'}</div>

                ) : null
            }
        </>
    );
}