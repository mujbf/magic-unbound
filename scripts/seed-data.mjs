import { MongoClient } from 'mongodb'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// MongoDB connection URI
const MONGODB_URI = 'mongodb+srv://mu_db_user:eIewgjdZRoW7DdSa@mu-db.uvk45tj.mongodb.net/?appName=mu-db'
const DATABASE_NAME = 'mu-db' // Change this if your database has a different name

async function seedData() {
  const client = new MongoClient(MONGODB_URI)

  try {
    console.log('🔗 Connecting to MongoDB...')
    await client.connect()
    console.log('✅ Connected successfully!')

    const db = client.db(DATABASE_NAME)
    const pagesCollection = db.collection('pages')

    // Read the seed data
    const seedDataPath = path.join(__dirname, '..', 'mongodb-seed-data.json')
    console.log(`📖 Reading seed data from: ${seedDataPath}`)
    
    const seedData = JSON.parse(fs.readFileSync(seedDataPath, 'utf-8'))
    
    if (!seedData.pages || !Array.isArray(seedData.pages)) {
      throw new Error('Invalid seed data format. Expected { pages: [...] }')
    }

    console.log(`📦 Found ${seedData.pages.length} pages to import`)

    // Check if pages already exist
    const existingPages = await pagesCollection.find({
      slug: { $in: seedData.pages.map(p => p.slug) }
    }).toArray()

    if (existingPages.length > 0) {
      console.log(`⚠️  Found ${existingPages.length} existing pages with same slugs:`)
      existingPages.forEach(p => console.log(`   - ${p.slug}`))
      console.log('\n🔄 These will be updated with new data...')
      
      // Update existing pages
      for (const page of seedData.pages) {
        await pagesCollection.updateOne(
          { slug: page.slug },
          { $set: page },
          { upsert: true }
        )
        console.log(`✅ Updated: ${page.slug}`)
      }
    } else {
      // Insert new pages
      const result = await pagesCollection.insertMany(seedData.pages)
      console.log(`✅ Inserted ${result.insertedCount} pages successfully!`)
    }

    console.log('\n🎉 Seed data imported successfully!')
    console.log('\n📍 You can now view your pages at:')
    seedData.pages.forEach(page => {
      console.log(`   - http://localhost:3000/${page.slug}`)
    })

  } catch (error) {
    console.error('❌ Error seeding data:', error)
    process.exit(1)
  } finally {
    await client.close()
    console.log('\n👋 Connection closed')
  }
}

// Run the seed function
seedData()
