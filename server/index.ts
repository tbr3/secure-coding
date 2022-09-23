import  { initApp } from "./api"

const port = 4000
const app = initApp()
app.listen(port, () => console.log(`API available on port ${port}`))