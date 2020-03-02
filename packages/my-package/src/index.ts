const processInfo = process as { readonly type?: string; };

if (processInfo.type === 'renderer' || processInfo.type === 'worker') {
  import('@src/bar').catch((error) => {
   console.log(error.message);
  });
}

export * from '@src/foo';
