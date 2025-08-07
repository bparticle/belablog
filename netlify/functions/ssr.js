export const handler = async (event, context) => {
  const { handler: ssrHandler } = await import('../../dist/server/entry.mjs');
  return ssrHandler(event, context);
}; 