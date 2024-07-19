import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getAccessToken, getDecodedToken } from "../../../../utils/auth";
import config from "../../../../config";
import useAxiosGet from "../../../../hooks/useAxiosGet";
import url from "../../../../services/url";
import { useState, useEffect, useRef } from "react";
import RoomNotFound from "../../Other/RoomNotFound";

function Meeting() {
    const { roomId } = useParams();
    const [unauthorized, setUnauthorized] = useState(false);
    const meetingContainerRef = useRef(null);

    const checkStudentData = useAxiosGet({
        path: url.ROOM_MEETING.CHECK_STUDENT + `/${roomId}`,
        headers: {
            Authorization: `Bearer ${getAccessToken()}}`,
        },
    });

    useEffect(() => {
        if (checkStudentData.errorStatus) {
            setUnauthorized(true);
        }
    }, [checkStudentData.errorStatus]);

    const decodeToken = getDecodedToken();
    let userIdFromToken;
    let userNameFromToken;

    const serverSecretKey = config.key.SERVER_SECRET;
    const zegoAppId = config.key.ZEGOCLOUD_APP_ID;

    if (decodeToken && decodeToken.Id && decodeToken.Fullname && decodeToken.iat) {
        userIdFromToken = decodeToken.Id.toString() + decodeToken.iat.toString();
        userNameFromToken = decodeToken.Fullname.toString();
    } else {
        userIdFromToken = null;
        userNameFromToken = null;
    }

    useEffect(() => {
        if (checkStudentData.errorStatus && meetingContainerRef.current) {
            const initializeMeeting = async () => {
                try {
                    const appID = zegoAppId;
                    const serverSecret = serverSecretKey;
                    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, userIdFromToken, userNameFromToken);
                    const zp = ZegoUIKitPrebuilt.create(kitToken);
                    zp.joinRoom({
                        container: meetingContainerRef.current,
                        scenario: {
                            mode: ZegoUIKitPrebuilt.VideoConference,
                        },
                        sharedLinks: [
                            {
                                name: "Copy link",
                                url: window.location.href,
                            },
                        ],
                    });
                } catch (error) {
                    console.log(error);
                }
            };
            initializeMeeting();
        }
    }, [checkStudentData.errorStatus, roomId, userIdFromToken, userNameFromToken, zegoAppId, serverSecretKey]);

    return (
        <>
            <Helmet>
                <title>Meeting | English Academy</title>
            </Helmet>
            {unauthorized ? <RoomNotFound /> : <div style={{ width: "100vw", height: "100vh" }} ref={meetingContainerRef} />}
        </>
    );
}

export default Meeting;
