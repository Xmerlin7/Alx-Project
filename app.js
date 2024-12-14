const express = require("express");
const app = express()

app.get("/", (req, res)=> {
  res.send("!شكرا على المساعدة يا عرص")
})
app.get("/home", (req, res)=> {
    res.send(" يا عرص")
  })
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
