import { NextApiRequest, NextApiResponse } from 'next';

const methodValidation = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default methodValidation;
