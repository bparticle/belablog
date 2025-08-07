// Netlify function wrapper for Astro Node adapter
// This handles the ES module compatibility issues

export const handler = async (event, context) => {
  try {
    // Use a different import strategy to avoid module scope issues
    const serverModule = await import('../../dist/server/entry.mjs').catch(err => {
      console.error('Import error:', err);
      throw err;
    });
    
    // Get the handler function
    const ssrHandler = serverModule.handler;
    
    if (!ssrHandler) {
      console.error('Available exports:', Object.keys(serverModule));
      throw new Error('SSR handler not found in server module');
    }
    
    // Call the SSR handler with the event and context
    const result = await ssrHandler(event, context);
    
    return result;
  } catch (error) {
    console.error('SSR Function Error:', error);
    console.error('Error stack:', error.stack);
    
    // Return a proper error response
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal Server Error',
        message: error.message,
        stack: error.stack
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
}; 