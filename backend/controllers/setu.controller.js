require("dotenv").config()

exports.setu = async (req,res) => {
    const body = req.body
    if(body.type=== "CONSENT_STATUS_UPDATE"){
        if(body.data.status === "ACTIVE"){
            console.log("Consent Notification Received")
            createSession(body.consentId)
        }
    }
    if (body.type === "SESSION_STATUS_UPDATE") {
        if (body.data.status === "COMPLETED") {
          console.log("In FI notification");
          fi_data_fetch(body.dataSessionId);
        } else {
          localStorage.setItem("jsonData", "PENDING");
        }
      }
    res.send("ok")
}

const head = {
    "x-client-id": process.env.SETU_CLIENT_ID,
    "Authorization": "bearer",
    "x-client-secret":process.env.SETU_CLIENT_SECRET
}

const createSession = async (consentId) => {
    const url = `https://fiu-uat.setu.co/sessions`
    const res = await fetch(url,{
        method:"POST",
        headers:{...head, "Content-Type":"Application/json"},
        body:JSON.stringify({
            "consentId": consentId,
            "DataRange": {
              "from": "2022-04-01T00:00:00Z",
              "to": "2022-10-01T00:00:00Z"
            },
            "format": "json"
          })
    })
    const result = await res.json()
}

// const fetchData = async (sessionId) => {
//     const url = `https://fiu-uat.setu.co/sessions/${sessionId}`
//     const res = await fetch(url,{})
// }