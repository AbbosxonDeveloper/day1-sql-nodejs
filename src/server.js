import express from 'express'
import userRouter from './router/user.router.js'

const PORT = process.env.PORT || 5500

const app = express()

app.use(express.json())

app.use('/api', userRouter)

app.listen(PORT, () => console.log(`server ready at http://localhost:${PORT}`))