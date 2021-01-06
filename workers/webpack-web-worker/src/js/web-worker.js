import parse from 'csv-parse/lib/sync';

function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('load', (evt) => {
      resolve(evt.target.result);
    });
    reader.addEventListener('error', (evt) => {
      reject(evt.target.error);
    });

    reader.readAsText(file);
  });
}

self.addEventListener('message', async ({ data: file }) => {
  const content = await readFile(file);
  const records = parse(content, { columns: true, skip_empty_lines: true, skip_lines_with_empty_values: true });
  self.postMessage(records.length);
});
