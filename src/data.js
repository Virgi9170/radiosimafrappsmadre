import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"",
            artist: "Radio Online",
            cover: "https://cdn.pixabay.com/photo/2013/07/13/09/37/loudspeaker-155807_960_720.png",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "",
            active: true,
        },
      
    ];
}

export default chillHop;

