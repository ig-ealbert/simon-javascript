import { createSequence } from '@/lib/create-sequence';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<number[]>
) {
  const sequence = createSequence();
  res.status(200).send(sequence);
}
