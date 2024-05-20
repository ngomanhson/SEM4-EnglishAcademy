import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function Meeting() {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        try {
            const appID = null;
            const serverSecret = "";
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
                <title>Meeting | English Academy</title>
            </Helmet>
            <div style={{ width: "100vw", height: "100vh" }} ref={myMeeting} />
        </>
    );
}

export default Meeting;
