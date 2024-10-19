import { NextRequest, NextResponse } from 'next/server'
import { Address, createWalletClient, http, parseEther } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { storyTestnet } from 'viem/chains'

export async function POST(req: NextRequest) {
  // Parse the request body
  const body = await req.json()
  const { walletAddress, amount } = body

  console.log('Received wallet address:', walletAddress)
  console.log('Funding amount:', amount)

  const walletClient = createWalletClient({
    chain: storyTestnet,
    transport: http(),
  })
  
  // Handle both 0x-prefixed and non-prefixed private keys
  const privateKeyHex = process.env.PRIVATE_KEY?.startsWith('0x')
    ? process.env.PRIVATE_KEY
    : `0x${process.env.PRIVATE_KEY}`
  
  const account = privateKeyToAccount(privateKeyHex as `0x${string}`)
  

  if (!walletAddress || !amount) {
    return NextResponse.json({ message: 'Wallet address and amount are required' }, { status: 400 })
  }

  try {
    const hash = await walletClient.sendTransaction({ 
      account,
      chain: storyTestnet,
      to: walletAddress,
      value: parseEther(amount.toString()),
      kzg: null
    })

    return NextResponse.json({ message: 'Funds sent successfully', transactionHash: hash })
  } catch (error) {
    console.error('Error sending funds:', error)
    return NextResponse.json({ message: 'Error sending funds', error: error.message }, { status: 500 })
  }
}
