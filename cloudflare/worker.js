export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method === 'GET' && url.pathname === '/health') {
      return Response.json({
        status: 'ok',
        app: 'Taskitator Next',
        stage: 'foundation'
      }, {
        headers: { 'Cache-Control': 'no-store' }
      });
    }

    return Response.json(
      { error: 'Endpoint not found.' },
      { status: 404 }
    );
  }
};