import { parse } from 'yaml';

export function yaml2json(input: string) {
  const yamlObj = parse(input);
  return JSON.stringify(yamlObj);
}
