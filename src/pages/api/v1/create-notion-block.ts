import { Client } from '@notionhq/client';
import { NextApiRequest, NextApiResponse } from 'next';

const NOTION_API_TOKEN = process.env.NOTION_SECRET;
const NOTION_DATABASE_ID = process.env.NOTION_DB_ID;
const OPEN_AI_KEY = process.env.OPEN_AI_KEY;
const notion = new Client({
  auth: NOTION_API_TOKEN,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { category, message } = req.body;

  try {
    const openAiPrompt = `I will give u a category and description for a issue ticket that user submitted. You need to give me the urgency of the ticket. From Low to High.`;

    const response = await notion.pages.create({
      parent: {
        database_id: NOTION_DATABASE_ID as string,
      },
      properties: {
        title: [
          {
            text: {
              content: category,
            },
          },
        ],
        Description: [
          {
            text: {
              content: message,
            },
          },
        ],
      },
    });

    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ err });
  }
};

export default handler;
