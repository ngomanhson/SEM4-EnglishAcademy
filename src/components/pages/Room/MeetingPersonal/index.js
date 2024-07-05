import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import config from "../../../../config";

function MeetingPersonal() {
    const { roomId } = useParams();

    const serverSecretKey = config.key.SERVER_SECRET;
    const zegoAppId = config.key.ZEGOCLOUD_APP_ID;

    const myMeeting = async (element) => {
        try {
            const appID = zegoAppId;
            const serverSecret = serverSecretKey;
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Ngo Manh Son");
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: element,
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

    return (
        <>
            <Helmet>
                <title>Meeting Personal | English Academy</title>
            </Helmet>
            <div style={{ width: "100vw", height: "100vh" }} ref={myMeeting} />
        </>
    );
}

export default MeetingPersonal;
