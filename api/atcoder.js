import { fetchUserInfo } from '@qatadaazzeh/atcoder-api';

export default async function handler(req, res) {
    // Allow your GitHub Pages portfolio to call this API
    res.setHeader(
        'Access-Control-Allow-Origin',
        'https://abra-r.github.io',
        'http://localhost:5173/'
    );

    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, OPTIONS'
    );

    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type'
    );

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const user = await fetchUserInfo('abra_r');

        return res.status(200).json({
            userMaxRating: user.userMaxRating
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            error: 'Failed to fetch AtCoder information'
        });
    }
}