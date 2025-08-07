// Netlify function wrapper for Astro Deno adapter
// This handles the ES module compatibility issues

export const handler = async (event, context) => {
  try {
    // Import the server module from the Deno adapter output
    const serverModule = await import('../../dist/server/entry.mjs');
    
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