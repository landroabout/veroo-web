import { index } from '../../utils/indexer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://app.google.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    try {
        const result = await index();
        res.status(200).send({ result });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'failed to fetch data' });
    }
}
