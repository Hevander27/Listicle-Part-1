import './config/dotenv.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import giftsRouter from './routes/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Serve static files from the 'public' directory
app.use('/public', express.static('./public'))

// Serve static files from the 'scripts' directory
app.use('/scripts', express.static('./public/scripts'))

// Serve static files from the 'assets' directory
app.use('/assets', express.static('./public/assets'))

// Use the gifts router
app.use('/gifts', giftsRouter)

// Define root route
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">BookNook API</h1>')
})

// Catch-all 404 handler for any unmatched route
app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, './public/404.html'))
})

// Start the server
const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
