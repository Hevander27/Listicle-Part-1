import './config/dotenv.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import giftsRouter from './routes/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Serve all static frontend files (index.html, gift.html, scripts, assets, images)
// from the 'public' directory at the root so the home page lives at '/'.
app.use(express.static('./public'))

// Use the gifts router (API at /gifts, detail page at /gifts/:giftId)
app.use('/gifts', giftsRouter)

// Catch-all 404 handler for any unmatched route
app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, './public/404.html'))
})

// Start the server
const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
