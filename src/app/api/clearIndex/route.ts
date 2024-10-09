import { NextResponse } from 'next/server'
import { Pinecone } from '@pinecone-database/pinecone'
import axios from 'axios'

export async function POST() {
  try {
    const url = process.env.RAG_SERVICE
    await axios.post(`${url}/clear`)
  } catch (error) {
    console.error('Error deleting index:', error)
  }

  // Instantiate a new Pinecone client
  const pinecone = new Pinecone()
  // Select the desired index
  const index = pinecone.Index(process.env.PINECONE_INDEX!)

  // Use the custom namespace, if provided, otherwise use the default
  const namespaceName = process.env.PINECONE_NAMESPACE ?? ''
  const namespace = index.namespace(namespaceName)

  // Delete everything within the namespace
  await namespace.deleteAll()

  return NextResponse.json({
    success: true
  })
}
