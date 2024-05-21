import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getDecodedToken } from "../../../../utils/auth";

function Meeting() {
    const { roomId } = useParams();

    const decodeToken = getDecodedToken();
    let userIdFromToken;
    let userNameFromToken;

    if (decodeToken && decodeToken.Id && decodeToken.Fullname) {
        userIdFromToken = decodeToken.Id.toString();
        userNameFromToken = decodeToken.Fullname.toString();
    } else {
        userIdFromToken = null;
        userNameFromToken = null;
    }

    const myMeeting = async (element) => {
        try {
            const appID = 2088572050;
            const serverSecret = "05251e3aafc278b6348e3267794b521e";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, userIdFromToken, userNameFromToken);
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
