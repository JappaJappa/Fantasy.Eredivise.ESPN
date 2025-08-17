import type { VercelRequest, VercelResponse } from '@vercel/node';

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    const users: User[] = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];
    
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const newUser: User = req.body;
    // Here you'd typically save to database
    res.status(201).json({ message: 'User created', user: newUser });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}