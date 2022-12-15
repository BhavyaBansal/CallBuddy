import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const Room = () => {
    const {roomID} = useParams();
    console.log(roomID);
    const meeting = async(element)=>{
        const appID = 297754821;
        const serverSecret = "5a2cfc47abfebb6cc48a654367838400";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomID,
          Date.now().toString(),
          "Bhavya"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
          container: element,
          senario: {
            mode: ZegoUIKitPrebuilt.GroupCall,
          },
        }); 
    };
  return (
    <div ref={meeting} style={{width:'100vw',height: '100vh'}}>
      
    </div>
  )
}

export default Room
