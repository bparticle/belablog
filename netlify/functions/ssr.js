// Netlify function wrapper for Astro Node adapter
// This handles the ES module compatibility issues

export const handler = async (event, context) => {
  try {
    // Use dynamic import to load the ES module
    const { handler: ssrHandler } = await import('../../dist/server/entry.mjs');
    
    // Call the SSR handler with the event and context
    return await ssrHandler(event, context);
  } catch (error) {
    console.error('SSR Function Error:', error);
    
    // Return a proper error response
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal Server Error',
        message: error.message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
}; 