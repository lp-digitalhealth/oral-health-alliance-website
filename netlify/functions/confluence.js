exports.handler = async function(event, context) {
  const CONFLUENCE_BASE = 'https://oralhealth.atlassian.net/wiki';
  const SPACE_KEY = 'PM';

  try {
    const url = `${CONFLUENCE_BASE}/rest/api/content?spaceKey=${SPACE_KEY}&type=blogpost&limit=50&expand=body.view,history,version&orderby=history.createdDate+desc`;

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Confluence API error', status: response.status })
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
